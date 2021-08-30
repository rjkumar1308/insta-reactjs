const router = require('express').Router();
const Stories = require('../models/stories');
const authenticateJwt = require('../auth/auth').authenticateJwt;

router.get('/getStories', authenticateJwt, (req, res) => {
    Stories.find({}, (error, stories) => {
        if (error) {
            return res.status(500).send({
                message: '500 - Internal Server Error.'
            });
        }
        return res.send({ stories });
    });
});

module.exports = router;