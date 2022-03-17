var express = require('express');
var router = express.Router();
var webinar = require("../controllers/webinars")

router.get('/country', webinar.getWebinarByCountry);
router.post('/add', webinar.create);
router.get('/:id', webinar.getWebinar)
router.post('/update', webinar.update)
router.delete('/:id', webinar.delete);

module.exports = router;
