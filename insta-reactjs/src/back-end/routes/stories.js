const router = require('express').Router();
const Stories = require('../models/stories');

router.get('/getStories', (req, res) => {
    Stories.find({}, (error, stories) => {
        if(error){
            return res.send({
                status: 500,
                message: '500 - Internal Server Error.'
            });
        }
        return res.send({
            status:200,
            message: 'success',
            data:{
                stories: stories
            }
        });
    });
});

module.exports = router;