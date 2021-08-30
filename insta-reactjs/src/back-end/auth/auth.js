const jwt = require('jsonwebtoken');
const User = require('../models/user').User;
const accessTokenSecret = require('../secret/secret');

const signJwtToken = (req, res) => {
    const { username, password } = req.body;
    User.find({ user_name: username, password: password }, (error, response) => {
        if (error) {
            return res.status(500).send({
                message: '500 - Internal Server Error'
            });
        }
        if (response.length === 0) {
            return res.send({
                errorMessage: 'Incorrect username or password'
            });
        }
        const accessToken = jwt.sign({ username: response.user_name, role: response.role }, accessTokenSecret);
        res.send({ accessToken });
    });
};

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.sendStatus(401);
    }
    const token = authHeader.split('')[1];
    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            res.sendStatus(403);
        }
        next(user);
    });
};

module.exports = { signJwtToken, authenticateJwt };