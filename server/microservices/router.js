const express = require('express');
const router = express.Router();

// Custom Routes
const userRoutes = require('@/microservices/modals/user/userRouter');
const messageRoutes = require('@/microservices/modals/message/messageRouter');

router.use('/api', userRoutes);
router.use('/api', messageRoutes)

module.exports = router;