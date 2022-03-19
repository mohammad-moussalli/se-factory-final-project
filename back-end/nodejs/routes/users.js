var express = require('express');
var router = express.Router();
var user = require("../controllers/users"); 
const { update } = require('../services/users');

/* GET users listing. */
router.post('/register', user.register);
router.post('/login', user.login);
router.get('/', user.getUser)
router.get('/all', user.getAllUsers)
router.post('/update', update)
module.exports = router;
