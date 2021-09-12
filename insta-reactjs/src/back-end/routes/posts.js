const router = require('express').Router();
const Posts = require('../models/posts');
const User = require('../models/user').User;
const authenticateJwt = require('../auth/auth').authenticateJwt;
const formatPosts = require('../util/format.util').formatPosts;
const returnError = require('../util/util').returnError;

router.get('/getPosts', authenticateJwt, (req, res) => {
    const _id = req.user.id;
    User.findById(_id, { following: 1 }, (error, user) => {
        if (error || user === null) {
            returnError(error, res);
        }
        const following = user.following;
        if (following.length === 0) {
            return res.send({ posts: [] });
        }
        Posts.find({ "owner": { $in: following } }).lean().exec((error, posts) => {
            if (error) {
                returnError(error, res);
            }
            const promiseArray = [];
            posts.forEach(post => {
                promiseArray.push(User.findById(post.owner, { user_name: 1, profile_image: 1, stories: { $size: "$stories" } }).lean());
            });
            Promise.all(promiseArray).then(users => {
                if (posts.length !== users.length) {
                    returnError('error', res);
                }
                posts.forEach((post, index, posts) => {
                    posts[index].user_name = users[index].user_name;
                    posts[index].avatar = users[index].profile_image;
                    posts[index].userHasStories = users[index].stories > 0;
                });
                formatPosts(posts);
                return res.send({ posts });
            }).catch(error => {
                returnError(error, res);
            });
        });
    });
});

module.exports = router;