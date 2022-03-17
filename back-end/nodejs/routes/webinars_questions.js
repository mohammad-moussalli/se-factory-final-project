var express = require('express');
var router = express.Router();
var webinar_questions = require("../controllers/webinars_questions");

router.get('/country', webinar_questions.getQuestions);
router.post('/add', webinar_questions.createQuestions);
router.get('/:id', webinar_questions.getQuestion);
router.post('/update', webinar_questions.update);
router.delete('/country', webinar_questions.deleteQuestions);
router.delete('/:id', webinar_questions.delete);

module.exports = router;
