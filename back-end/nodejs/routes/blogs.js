var express = require('express');
var router = express.Router();
var blog = require("../controllers/blogs")

router.get('/', blog.getBlogs);
router.post('/add', blog.create);
router.post('/update', blog.update)
router.delete('/:id', blog.delete);

module.exports = router;
