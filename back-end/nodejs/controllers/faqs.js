const faqsServices = require ("../services/faqs");

module.exports = {
    create,
    getFaq,
    getFaqs,
    update,
    delete: _delete,
    deleteCategoryFaqs
}

function create(req, res, next) {
    faqsServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getFaq(req, res, next) {
    faqsServices.getFaq(req.params.id)
        .then((response) => res.json(response))
        .catch(next);}

function getFaqs(req, res, next) {
    faqsServices.getFaqs(req.params.category_id)
        .then((response) => res.json(response))
        .catch(next);}

function update(req, res, next) {
    faqsServices.update(req.body)
    .then((message) => res.json({message : message}))
    .catch(next);
}

function _delete(req, res, next) {
    faqsServices.delete(req.params.id)
        .then((message) => res.json({ message: message }))
        .catch(next);
}

function deleteCategoryFaqs(req, res, next) {
    faqsServices.deleteCategoryFaqs(req.params)
        .then((message) => res.json({ message: message }))
        .catch(next);
}