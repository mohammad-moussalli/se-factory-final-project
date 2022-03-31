var express = require('express');
var router = express.Router();
var user = require("../controllers/users"); 

/* GET users listing. */
router.post('/register', user.register);
router.post('/login', user.login);
router.get('/', user.getUser)
router.get('/all', user.getAllUsers)
router.post('/update', user.update)
router.post('/image', user.uploadImage)
module.exports = router;
