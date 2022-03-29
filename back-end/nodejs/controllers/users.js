const userServices = require ("../services/users")


module.exports = {
    register,
    login,
    getUser,
    getAllUsers,
    update,
    // uploadImage
};


function register(req, res, next) {
    userServices.create(req.body)
        .then((response) => res.json(response))
        .catch(err => res.status(400).json(err.message));
}

function login(req, res, err) {
    userServices.login(req.body)
        .then((response) => res.json(response))
        .catch(err);
}
function getUser(req, res, err) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    userServices.getUser(authHeader)
        .then(user => res.json(user))
        .catch(err);
}

function getAllUsers(req, res, err) {
    userServices.getAllUsers()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({err, message: "Users not found"}));
}

function update(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    userServices.update(req.body, token)
        .then(user => res.json(user))
        .catch(next);
}

// function uploadImage(req, res) {
//     console.log('req.files image:', req.files[0]);
//     userServices.uploadImage(req).then(image => console.log(image, "url"))
// }