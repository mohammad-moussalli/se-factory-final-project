var express = require('express');
var router = express.Router();
var scholarship = require("../controllers/scholarships")

router.get('/', scholarship.getAll);
router.post('/add', scholarship.create);
router.post('/cycle', scholarship.createCycle);
router.get('/get-cycle/:name', scholarship.getScholarshipCycle)
router.get('/get-scholarships-cycle', scholarship.getScholarshipsWithCycle)
router.get('/all', scholarship.getAllScholarshipsWithCycle)
router.get('/:id', scholarship.getScholarship)
router.post('/update', scholarship.update)
router.delete('/:id', scholarship._delete);

module.exports = router;
