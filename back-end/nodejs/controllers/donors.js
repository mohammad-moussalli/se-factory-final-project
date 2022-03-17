const donorServices = require ("../services/donors");

module.exports = {
    create,
    getDonations
}

function create(req, res, next) {
    donorServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);
}

function getDonations(req, res, next) {
    donorServices.getDonations(req.body)
        .then((donations) => res.json({donations: donations}))
        .catch(next);
}