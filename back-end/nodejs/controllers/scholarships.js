const scholarshipServices = require ("../services/scholarships")


module.exports = {
    getAll,
    create,
    getScholarship,
    getById,
    update,
    _delete,
    createCycle,
    getScholarshipCycle,
    getScholarshipsWithCycle,
};

function getAll(req, res, next) {
    scholarshipServices.getAll()
        .then(scholarship => res.json(scholarship))
        .catch(next);
}

function create(req, res, next) {
    scholarshipServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function createCycle(req, res, next) {
    scholarshipServices.createCycle(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getScholarship(req, res, next) {
    scholarshipServices.getScholarship(req.params.id)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getScholarshipCycle(req, res, next) {
    scholarshipServices.getScholarshipCycle(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getScholarshipsWithCycle(req, res, next) {
    scholarshipServices.getScholarshipsWithCycle()
        .then((response) => res.json({response : response}))
        .catch(next);}

function getById(req, res, next) {
    scholarshipServices.getById(req.params.id)
        .then(scholarship => res.json(scholarship))
        .catch(next);
}

function update(req, res, next) {
    scholarshipServices.update(req.body.id, req.body.name)
        .then(scholarship => res.json(scholarship))
        .catch(next);
}

function _delete(req, res, next) {
    scholarshipServices.delete(req.params.id)
        .then((message) => res.json({ message: message }))
        .catch(next);
}

