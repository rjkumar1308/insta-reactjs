const router = require('express').Router();
const Posts = require('../models/posts');

router.get('/getPosts', (req, res) => {
    Posts.find({}, (error, posts) => {
        if (error) {
            console.log("Error while fetching data => ", error);
            return res.send({
                status: 500,
                message: '500 - Internal Server Error.'
            });
        }
        return res.send({
            status: 200,
            message: 'success',
            data:{
                posts: posts
            }
        });
    });
});

module.exports = router;