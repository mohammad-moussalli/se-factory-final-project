var express = require('express');
var router = express.Router();
var donor = require("../controllers/donors")

router.post('/', donor.create);
router.get('/donations', donor.getDonations);

module.exports = router;
