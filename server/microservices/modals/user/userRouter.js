const express = require('express');
const router = express.Router();

const { userLogin, userRegister, userStatus, userList, userLogout } = require('@/microservices/modals/user/userController');
const authentication = require('@/middleware/authentication');

router.post('/login', userLogin);
router.post('/register', userRegister);
router.post('/logout', authentication, userLogout);

router.get('/user/:userid', authentication, userStatus);
router.get('/', authentication, userList);

module.exports = router;