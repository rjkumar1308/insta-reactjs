const router = require('express').Router();
const User = require('../models/user').User;
const authenticateJwt = require('../auth/auth').authenticateJwt;
const returnError = require('../util/util').returnError;
const sortStories = require('../util/util').sortStories;

router.get('/getStories', authenticateJwt, (req, res) => {
    const id = req.user.id;
    User.findById(id, { following: 1 }, (error, response) => {
        if (error) {
            returnError(error, res);
        }
        if (response.following && response.following.length === 0) {
            return res.send({
                stories: []
            });
        }
        let promiseArray = [];
        response.following.forEach(userId => {
            promiseArray.push(User.findById(userId, { stories: { upload_time: 1 }, user_name: 1, profile_image: 1 }).lean());
        });
        Promise.all(promiseArray).then(response => {
            let storiesArray = [];
            response.forEach(ele => {
                if (ele.stories.length === 0)
                    return;
                if (ele.stories.length === 1)
                    ele.last_updated = ele.stories[0].upload_time;
                else {
                    ele.last_updated = ele.stories.reduce((acc, val) => {
                        return acc.upload_time > val.upload_time ? acc.upload_time : val.upload_time;
                    });
                }
                delete ele.stories;
                storiesArray.push(ele);
            })
            sortStories(storiesArray);
            delete storiesArray.last_updated;
            return res.send({
                stories: storiesArray
            });
        }).catch(error => {
            if (error) {
                returnError(error, res);
            }
        })
    });
});

module.exports = router;