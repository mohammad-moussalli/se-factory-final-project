var express = require('express');
var router = express.Router();
var relationship = require("../controllers/relationships")

router.get('/', relationship.getMentorships);
router.post('/add', relationship.create);
router.get('mentor/:id', relationship.getMentorshipsByMentorId)
router.post('student/:id', relationship.getMentorshipsByStudentId)
router.get('/:id', relationship.getMentorShip);
router.delete('/:id', relationship.delete);

module.exports = router;
