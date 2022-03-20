const webinarQuestionServices = require ("../services/webinars_questions");

module.exports = {
    getQuestion,
    getQuestions,
    createQuestions,
    deleteQuestions,
    update,
    delete: _delete,
}

function createQuestions(req, res, next) {
    webinarQuestionServices.createQuestions(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);
}

function getQuestion(req, res, next) {
    webinarQuestionServices.getQuestion(req.params.id)
        .then((response) => res.json(response))
        .catch(next);
}

function getQuestions(req, res, next) {
    webinarQuestionServices.getQuestions(req.params.webinar_id)
        .then((response) => res.json(response))
        .catch(next);
}

function update(req, res, next) {
    webinarQuestionServices.update(req.body)
    .then((message) => res.json({message : message}))
    .catch(next);
}

function _delete(req, res, next) {
    webinarQuestionServices.delete(req.params.id)
        .then((message) => res.json({ message: message }))
        .catch(next);
}

function deleteQuestions(req, res, next) {
    webinarQuestionServices.deleteQuestions(req.body)
        .then((message) => res.json({ message: message }))
        .catch(next);
}