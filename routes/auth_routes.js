const router = require('express').Router();
const User = require('../models/User');

// Register User
router.post('/register', (clientReq, serverRes) => {
    try{
        const user = User.create(clientReq.body);

        serverRes.send({
            id: user.id,
            username: user.username
        });
        
    } catch(err) {
        if (err.message === 'user-exists') {
            serverRes.redirect('/login');
        }

        if (err.message === 'empty-creds') {
            serverRes.redirect('/login');
        }
    }
});

// Login User
router.post('/login', (clientReq, serverRes) => {
    try{
        const user = User.getUserByUsername(clientReq.body.username);

        if (clientReq.body.password !== user.password) throw new Error('password');

        serverRes.send({
            id: user.id,
            username: user.username
        });
        
    } catch(err) {
        if (err.message === 'not_found') {
            serverRes.redirect('/register');
        }

        if (err.message === 'password') {
            serverRes.redirect('/login');
        }
    }
});

module.exports = router;