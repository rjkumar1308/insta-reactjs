const router = require('express').Router();
const User = require('../models/user').User;
const Suggestions = require('../models/user').Suggestions;

router.get('/getUserDetails', (req, res) => {
    User.find({}, (error, user) => {
        if (error) {
            return res.status(500).send({
                message: '500 - Internal Server Error'
            });
        }
        return res.send({
            user_details: user.length > 0 ? user[0] : user
        });
    });
});

router.get('/getSuggestions', (req, res) => {
    Suggestions.find({}, (error, suggestions) => {
        if (error) {
            return res.status(500).send({
                message: '500 - Internal Server Error'
            });
        }
        return res.send({
            suggestions_list: suggestions
        });
    });
});

module.exports = router;