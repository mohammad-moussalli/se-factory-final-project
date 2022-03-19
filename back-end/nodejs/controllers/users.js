const userServices = require ("../services/users")


module.exports = {
    register,
    login,
    getUser,
    getAllUsers,
    update
};


function register(req, res, next) {
    userServices.create(req.body)
        .then((response) => res.json(response))
        .catch(err => res.status(400).json(err.message));
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

function getAllUsers(req, res, next) {
    userServices.getAllUsers()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({err, message: "Users not found"}));
}

function update(req, res, next) {
    userServices.update(req.body)
        .then(user => res.json(user))
        .catch(next);
}