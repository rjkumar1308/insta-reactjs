const router = require('express').Router();

router.use('/user',require('./user.js'));
router.use('/posts',require('./posts.js'));
router.use('/stories',require('./stories.js'));

module.exports = router;