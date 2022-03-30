var express = require('express');
var router = express.Router();
var applications = require("../controllers/applications")

router.post('/mentor-buddy', applications.createMentorBuddyApplication);
router.post('/student-buddy', applications.createStudentBuddyApplication);
router.post('/scholarship', applications.createScholarshipApplication);
router.get('/scholarship/records', applications.getScholarshipRecords);


module.exports = router;
