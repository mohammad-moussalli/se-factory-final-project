var express = require('express');
var router = express.Router();
var contact_us = require("../controllers/contact_us")

router.post('/', contact_us.create);

module.exports = router;
