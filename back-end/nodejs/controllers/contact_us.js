const faqsCategoryServices = require ("../services/contact_us");

module.exports = {
    create,
}

function create(req, res, next) {
    faqsCategoryServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}
