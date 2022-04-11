var express = require('express');
var router = express.Router();
var faq_categories = require("../controllers/faq_categories")

router.get('/', faq_categories.getAll);
router.post('/add', faq_categories.create);
router.get('/:id', faq_categories.getCategory)
router.post('/update', faq_categories.update)
router.delete('/:id', faq_categories.delete);

module.exports = router;
