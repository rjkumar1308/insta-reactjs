const mongoose = require('mongoose');

const storiesSchema = mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "user_name": String,
    "avatar": String
});

const Stories = mongoose.model('Stories', storiesSchema, 'stories');

module.exports = Stories;