const router = require('express').Router();
const mongoose = require('mongoose');
const Posts = require('../models/posts');
const Comments = require('../models/comments').Comments;
const User = require('../models/user').User;
const authenticateJwt = require('../auth/auth').authenticateJwt;
const formatPosts = require('../util/util').formatPosts;
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
                posts.forEach((post, index, posts) => {
                    if (post.comments.length > 2) {
                        post.comments = post.comments.map(comment => mongoose.Types.ObjectId(comment));
                        Comments.aggregate().match({ "_id": { $in: post.comments } })
                            .project({ "likes_length": { "$size": "$likes" }, "_id": 1, "owner": 1, "content": 1 })
                            .sort({ "likes_length": "desc" })
                            .limit(2).exec((error, top_comments) => {
                                if (error) {
                                    returnError(error, res);
                                }
                                let commentPromiseArray = [];
                                top_comments.forEach(comment => {
                                    commentPromiseArray.push(User.findById(comment.owner, { user_name: 1 }));
                                })
                                Promise.all(commentPromiseArray).then(users => {
                                    users.forEach((user, index) => {
                                        top_comments[index].user_name = user.user_name;
                                        top_comments[index].profile_image = user.profile_image;
                                        delete top_comments[index].likes_length;
                                        delete top_comments[index].owner;
                                    })
                                    delete posts[index].comments;
                                    delete posts[index].likes;
                                    posts[index].top_comments = top_comments;
                                    return res.send({ posts });
                                }).catch(error => {
                                    returnError(error, res);
                                });
                            });
                    }
                });
            }).catch(error => {
                returnError(error, res);
            });
        });
    });
});

module.exports = router;