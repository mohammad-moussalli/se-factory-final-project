const webinarServices = require ("../services/webinars");

module.exports = {
    create,
    getWebinar,
    getWebinars,
    getWebinarByCountry,
    update,
    delete: _delete,
}

function create(req, res, next) {
    webinarServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);
}

function getWebinar(req, res, next) {
    webinarServices.getWebinar(req.params.id)
        .then((response) => res.json(response))
        .catch(next);
}

function getWebinars(req, res, next) {
    webinarServices.getWebinars(req.params.id)
        .then((response) => res.json(response))
        .catch(next);
}

function getWebinarByCountry(req, res, next) {
    webinarServices.getWebinarByCountry(req.body)
        .then((response) => res.json(response))
        .catch(next);
}

function update(req, res, next) {
    webinarServices.update(req.body)
    .then((message) => res.json({message : message}))
    .catch(next);
}

function _delete(req, res, next) {
    webinarServices.delete(req.params.id)
        .then((message) => res.json({ message: message }))
        .catch(next);
}