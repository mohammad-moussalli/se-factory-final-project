var express = require('express');
var router = express.Router();
var report = require("../controllers/reports")

/* GET users listing. */
router.get('/', report.getReports);
router.post('/add', report.create);
router.post('/update', report.update)
router.delete('/:id', report.delete);

module.exports = router;
