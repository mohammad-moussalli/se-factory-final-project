var express = require('express');
var router = express.Router();
var user = require("../controllers/users"); 
const { cloudinary } = require('../config/cloudinary');


/* GET users listing. */
router.post('/register', user.register);
router.post('/login', user.login);
router.get('/', user.getUser)
router.get('/all', user.getAllUsers)
router.post('/update', user.update)
// router.get("/image/:name", user.getImage);

// router.get('/test1', user.getGoogleAuthURL)
// router.post('/test2', user.getGoogleUser)
router.post('/upload-image', user.updatePicture);


module.exports = router;


