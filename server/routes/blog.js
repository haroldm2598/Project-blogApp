const express = require('express');
const passport = require('passport');
const blog = require('../controller/blog.controller');
const multer = require('multer');
const path = require('path');
// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/image');
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + '_' + Date.now() + path.extname(file.originalname)
		);
	}
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get('/article', blog.getBlog);
router.get('/recommended', blog.getRecommended);
router.post(
	'/create',
	[upload.single('image'), passport.authenticate('jwt', { session: false })],
	blog.createBlog
);

module.exports = router;
