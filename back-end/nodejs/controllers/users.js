const userServices = require ("../services/users")

module.exports = {
    register,
    login,
    getUser,
    getAllUsers,
    update,
    uploadImage
};

async function register(req, res, next) {
    try{
        const response = await userServices.create(req.body)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function login(req, res, err) {
    try{
        const response = await userServices.login(req.body)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getUser(req, res, err) {
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        const user = await userServices.getUser(token)
        return res.status(200).json(user)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getAllUsers(req, res, err) {
    try{
        const users = await userServices.getAllUsers()
        return res.status(200).json(users)

    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, next) {
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        const user = await userServices.update(req.body, token)
        return res.status(200).json(user)
    }catch(err){
        (res.status(400).json(err));
    }
}

function uploadImage(req, res) {
    console.log('req.files image:', req.files[0]);
    userServices.uploadImage(req).then(image => console.log(image, "url"))
}