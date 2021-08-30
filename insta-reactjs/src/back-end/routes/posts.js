const router = require('express').Router();
const Posts = require('../models/posts');
const authenticateJwt = require('../auth/auth').authenticateJwt;

router.get('/getPosts', authenticateJwt, (req, res) => {
    Posts.find({}, (error, posts) => {
        if (error) {
            console.log("Error while fetching data => ", error);
            return res.status(500).send({
                message: '500 - Internal Server Error.'
            });
        }
        return res.send({ posts });
    });
});

module.exports = router;