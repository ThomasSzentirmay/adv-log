const router = require('express').Router();
const Adventure = require('../models/Adventure');

// Create an Adventure
router.post('/adventure', (clientReq, serverRes) => {
    try {
        Adventure.create(clientReq.body);

        serverRes.send('Adventure added successfully!');
    } catch (err) {
        if (err.message === 'empty_data') {
            serverRes.redirect('/dashboard');
        }
    }
});

// Create Adventures for user
router.get('/adventures:user_id', (clientReq, serverRes) => {
    const adventures = Adventure.getByUserId(clientReq.params.user_id);

    serverRes.send(adventures);
});

module.exports = router;