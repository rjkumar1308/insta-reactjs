const mongoose = require('mongoose');

const postsSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    avatar: String,
    user_name: String,
    image: String,
    no_of_likes: Number,
    caption: String,
    no_of_comments: Number,
    top_comments: [{
        user_name: String,
        comment: String
    }],
    post_time: Number
});

const Posts = mongoose.model('Posts', postsSchema, 'posts');

module.exports = Posts;