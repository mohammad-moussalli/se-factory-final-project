var express = require('express');
var router = express.Router();
var user = require("../controllers/users"); 

router.post('/register', user.register);
router.post('/login', user.login);
router.get('/', user.getUser)
router.get('/all', user.getAllUsers)
router.get('/students', user.getAllStudents)
router.get('/mentors', user.getAllMentors)
router.post('/update', user.update)
router.post('/upload-image', user.updatePicture);

module.exports = router;


