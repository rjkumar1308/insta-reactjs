const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "user_name": String,
    "first_name": String,
    "last_name": String,
    "profile_image": String
});

const suggerstionSchema = mongoose.Schema({
    "_id": mongoose.Types.ObjectId,
    "user_name": String,
    "avatar": String,
    "followed_by": String
});

const User = mongoose.model('User', userSchema, 'users');
const Suggestions = mongoose.model('Suggestions', suggerstionSchema, 'suggestions');

module.exports = { User, Suggestions };