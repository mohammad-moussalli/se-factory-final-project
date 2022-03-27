var jwt_decode = require ("jwt-decode");
const model = require('../models');

module.exports = {
    hasPermission,
    getUser
}

async function hasPermission(token, type) {
    const decoded_jwt = jwt_decode(token)
    const email = decoded_jwt.email;
    const user = await model.User.findOne({ where: { email: email } });
    if(!user){
        return false;
    }   ``
    const user_type = await model.User_Type.findByPk(user.user_type_id)
    return user_type.type === type;
}

// if statement is not working (only works when token is valid)
async function getUser(token) {
    const decoded_jwt = jwt_decode(token)
    const email = decoded_jwt.email;
    const user = await model.User.findOne({ where: { email: email } });
    if(!user){
        return "User not found";
    }
    return user.dataValues;
}
