const faqsCategoryServices = require ("../services/faq_categories");

module.exports = {
    create,
    getAll,
    getCategory,
    update,
    delete: _delete,
}

function create(req, res, next) {
    console.log(req.body)
    faqsCategoryServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getAll(req, res, next) {
    faqsCategoryServices.getAll()
        .then((response) => res.json(response))
        .catch(next);}



function getCategory(req, res, next) {
    faqsCategoryServices.getCategoryId(req.params.id)
        .then(category => res.json(category))
        .catch(next);
}

function update(req, res, next) {
    faqsCategoryServices.update(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);
}

function _delete(req, res, next) {
    faqsCategoryServices.delete(req.params.id)
        .then((message) => res.json({message : message}))
        .catch(next);
}
