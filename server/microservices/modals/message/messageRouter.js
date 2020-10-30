const express = require('express');
const router = express.Router();

const { userMessage } = require('@/microservices/modals/message/messageController');
const authentication = require('@/middleware/authentication');

router.get('/messages/:userid', authentication, userMessage);

module.exports = router;