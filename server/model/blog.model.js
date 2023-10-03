const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
	{
		image: { type: String },
		title: { type: String, required: true },
		description: { type: String, required: true },
		authorName: { type: Schema.Types.ObjectId, ref: 'User', required: true }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);
// module.exports = Blog;
