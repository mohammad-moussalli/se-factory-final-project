const storyServices = require ("../services/stories")


module.exports = {
    getAll,
    create,
    getStory,
    update,
    _delete,
};

function getAll(req, res, next) {
    storyServices.getAll()
        .then(story => res.json(story))
        .catch(next);
}

function create(req, res, next) {
    storyServices.create(req.body)
        .then((message) => res.json({message : message}))
        .catch(next);}

function getStory(req, res, next) {
    storyServices.getStory(req.params.id)
        .then((message) => res.json({message : message}))
        .catch(next);}

function update(req, res, next) {
    storyServices.update(req.body.id, req.body.story)
        .then(story => res.json(story))
        .catch(next);
}

function _delete(req, res, next) {
    storyServices.delete(req.params.id)
        .then((message) => res.json({ message: message }))
        .catch(next);
}