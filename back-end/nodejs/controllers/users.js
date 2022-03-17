const userServices = require ("../services/users")


module.exports = {
    register,
    login,
    getUser,
    update
};


function register(req, res, next) {
    userServices.create(req.body)
        .then((response) => res.json(response))
        .catch(next);
}

function login(req, res, next) {
    userServices.login(req.body)
        .then((response) => res.json(response))
        .catch(next);
}
// only working in body (not in authorization)
function getUser(req, res, next) {
    userServices.getUser(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function update(req, res, next) {
    userServices.update(req.body)
        .then(user => res.json(user))
        .catch(next);
}