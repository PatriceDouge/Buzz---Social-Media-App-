const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Post = mongoose.model('posts');

const ctrlUser = require('../controllers/user.controller');
const ctrlPost = require('../controllers/post.controller');
const ctrlChat = require('../controllers/chat.controller');

const jwtHelper = require('../config/jwtHelper');


router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);


router.post('/post', ctrlPost.savePost);
//router.post('/chat', ctrlChat.saveChat);


router.get('/test', (req, res) => {
    res.send('api works');
});

router.get('/posts', ctrlPost.getPost );
//router.get('/:room',ctrlChat.getRoom);





module.exports = router;