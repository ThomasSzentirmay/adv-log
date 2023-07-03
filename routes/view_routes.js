const router = require('express').Router();
const path = require('path');

// Show all user adventures page
router.get('/adventures', (clientReq, serverRes) => {
    serverRes.sendFile(path.join(__dirname, '../views/adventures.html'))
});

// Show the login page
router.get('/login', (clientReq, serverRes) => {
    serverRes.sendFile(path.join(__dirname, '../views/login.html'))
});

// Show the register page
router.get('/register', (clientReq, serverRes) => {
    serverRes.sendFile(path.join(__dirname, '../views/register.html'))
});

module.exports = router;