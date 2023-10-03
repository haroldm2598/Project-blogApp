const Blog = require('../model/blog.model');
const asyncHandler = require('express-async-handler');

exports.getBlog = asyncHandler(async (req, res) => {
	try {
		let query = Blog.find();

		const page = parseInt(req.query.page) || 1;
		const pageSize = parseInt(req.query.limit) || 2;
		const skip = (page - 1) * pageSize;
		const total = await Blog.countDocuments();
		const pages = Math.ceil(total / pageSize);
		query = query
			.sort({ createdAt: -1 })
			.populate('authorName')
			.skip(skip)
			.limit(pageSize)
			.exec();

		if (page > pages) {
			return res.status(404).json({
				status: 'failed',
				message: 'page not found'
			});
		}

		const result = await query;

		res.status(200).json({
			status: 'sucess',
			count: result.length,
			page,
			pages,
			blog: result
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ err });
	}
});

exports.getRecommended = asyncHandler(async (req, res) => {
	try {
		const PAGE_SIZE = 5;
		const { page = 0 } = req.query;
		const blog = await Blog.find({}, null, {
			skip: parseInt(page) * PAGE_SIZE,
			limit: PAGE_SIZE
		})
			.sort({ createdAt: -1 })
			.populate('authorName')
			.exec();
		res.status(200).json({ blog });
	} catch (err) {
		console.log(err);
		res.status(500).json({ err });
	}

	// try {
	// 	const blog = await Blog.find()
	// 		.sort({ createdAt: -1 })
	// 		.populate('authorName')
	// 		.exec();

	// 	res.status(200).json({ blog });
	// } catch (err) {
	// 	console.log(err);
	// 	res.status(500).json({ err });
	// }
});

exports.createBlog = asyncHandler(async (req, res) => {
	try {
		const blogExist = await Blog.findOne({ title: req.body.title });

		if (!blogExist) {
			const newBlog = new Blog({
				image: req.file.path,
				title: req.body.title,
				description: req.body.description,
				authorName: req.user._id
			});

			await newBlog.save();
			console.log('blog create');
		} else {
			console.log('Blog title already exist');
		}
	} catch (err) {
		console.log(err);
	}
});
