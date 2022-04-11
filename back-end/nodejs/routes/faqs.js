var express = require('express');
var router = express.Router();
var faq = require("../controllers/faqs")

router.get('/category/:category_id', faq.getFaqs);
router.post('/add', faq.create);
router.get('/:id', faq.getFaq)
router.post('/update', faq.update)
router.delete('/:id', faq.delete);
router.delete('/category/:category_id', faq.deleteCategoryFaqs);

module.exports = router;
