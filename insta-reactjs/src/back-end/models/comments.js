const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "owner": String,
    "likes": Array,
    "content": String,
    "sub_comments": Array
});

const Comments = mongoose.model('Comments', commentSchema, 'comments');

module.exports = { Comments };