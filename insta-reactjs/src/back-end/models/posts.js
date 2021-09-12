const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    owner: String,
    image: String,
    likes: Array,
    caption: String,
    comments: Array,
    post_time: Number
});

const Posts = mongoose.model('Posts', postsSchema, 'posts');

module.exports = Posts;