const applicationServices = require ("../services/applications");

module.exports = {
    createScholarshipApplication,
    createStudentBuddyApplication,
    createMentorBuddyApplication,
    getScholarshipRecords
}

function createScholarshipApplication(req, res, next) {
    applicationServices.createScholarshipApplication(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);
    }

function createStudentBuddyApplication(req, res, next) {
    applicationServices.createStudentBuddyApplication(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);
    }

function createMentorBuddyApplication(req, res, next) {
    applicationServices.createMentorBuddyApplication(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);
    }

function getScholarshipRecords(req, res, next) {
    applicationServices.getScholarshipRecords()
        .then((response) => res.json({response : response}))
        .catch(next);
    }