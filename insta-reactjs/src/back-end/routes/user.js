const router = require('express').Router();
const User = require('../models/user').User;
const Suggestions = require('../models/user').Suggestions;
const signJwtToken = require('../auth/auth').signJwtToken;
const authenticateJwt = require('../auth/auth').authenticateJwt;

router.get('/getUserDetails', authenticateJwt, (req, res) => {
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

router.get('/getSuggestions', authenticateJwt, (req, res) => {
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

router.post('/login', signJwtToken);

router.get('/verify', authenticateJwt, (req, res)=>{
    res.send({
        success:true
    });
});

module.exports = router;