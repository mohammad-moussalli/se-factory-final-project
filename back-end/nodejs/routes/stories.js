var express = require('express');
var router = express.Router();
var story = require("../controllers/stories")

router.get('/', story.getAll);
router.post('/add', story.create);
router.post('/update', story.update);
router.get('/:id', story.getStory);
router.delete('/:id', story._delete);

module.exports = router;
