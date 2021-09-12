const mongoose = require('mongoose');

const formatUserDataForSignup = data => {
    let formattedData = {
        "_id": mongoose.Types.ObjectId(),
        "user_name": '',
        "first_name": '',
        "last_name": '',
        "profile_image": '',
        "password": '',
        "role": '',
        "email": '',
        "mobile": '',
    }
    if (data.username) {
        formattedData.user_name = data.username;
    }
    if (data.full_name) {
        const name = data.full_name.split(' ');
        formattedData.first_name = name[0];
        formattedData.last_name = name[1];
    }
    if (data.password) {
        formattedData.password = data.password;
    }
    if (data.role) {
        formattedData.role = data.role;
    }
    if (data.email) {
        formattedData.email = data.email;
    }
    if (data.mobile) {
        formattedData.mobile = data.mobile;
    }
    return formattedData;
};

const formatPosts = posts => {
    posts.forEach(post => {
        post.no_of_likes = post.likes.length;
        post.no_of_comments = post.comments.length;
    });
}

module.exports = { formatUserDataForSignup, formatPosts };