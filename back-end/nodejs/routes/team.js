var express = require('express');
var router = express.Router();
var team = require("../controllers/team")

router.get('/', team.getTeam);
router.post('/add', team.create);
router.post('/update', team.update)
router.delete('/:id', team.delete);

module.exports = router;
