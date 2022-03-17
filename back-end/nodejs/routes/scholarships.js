var express = require('express');
var router = express.Router();
var scholarship = require("../controllers/scholarships")

/* GET scholarship listing. */
router.get('/', scholarship.getAll);
router.post('/add', scholarship.create);
router.post('/cycle', scholarship.createCycle);
router.get('/get-cycle', scholarship.getScholarshipCycle)
router.get('/:id', scholarship.getScholarship)
router.post('/update', scholarship.update)
router.delete('/:id', scholarship._delete);

module.exports = router;