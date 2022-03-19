const model = require('../models')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config.json');
const business_inteligence = require('../business_intelligence/permissions')
module.exports = {
    create,
    login,
    update,
    getUser,
    getAllUsers
};

async function login({ email, password }) {
    const user = await model.User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password)))
        return {message: 'Username or password is incorrect'};

    // authentication successful
    const token = jwt.sign({ email: user.email }, config.secret, { expiresIn: '7d' });
    return {token: token };
}


async function create(params) {
    console.log(params, "Hello")

    // validate
    if (await model.User.findOne({ where: { email: params.email } })) {
        throw new Error (`Email ${params.email} is already taken`);
    }
    //hash password
    if (params.password) {
        params.password = await bcrypt.hash(params.password, 10);
    }
    // save user
    await model.University.create({

        university: params.university,
        major: params.major,
        degree: params.degree,
        university_country: params.university_country,
        university_city: params.university_city,
    })
    const university_id = await model.University.max('id');
    await model.User.create({
        user_type_id: params.user_type_id,
        university_id: university_id,
        first_name: params.first_name,
        last_name: params.last_name,
        email: params.email,
        password: params.password,
        dob: params.dob,
        country_code: params.country_code,
        mobile_phone: params.mobile_phone,
        sex: params.sex,
        country: params.country,
        city: params.city,
        nationality: params.nationality,
        profile_picture: params.profile_picture
    });
    if(params.user_type_id === 3){
        const user_id = await model.User.max('id');
        await model.Mentor.create({
            user_id: user_id,
            job: params.job,
            job_country: params.job_country,
            job_city: params.job_city
        })
    }
    const token = jwt.sign({ email: params.email }, config.secret, { expiresIn: '7d' });

    return {token: token}

}

/// Update function not working (updating on database but not sending anyhting in postman)
async function update(params) {
    let user =  await business_inteligence.getUser(params.body.token)
    // validate
    // const userChanged = params.body.email && user.email !== params.body.email;
    // if (userChanged && await model.User.findOne({ where: { email: params.body.email } })) {
    //     return {message: 'Email "' + params.body.email + '" is already taken'};
    // }

    // hash password if it was entered
    if (params.body.password) {
        params.body.password = await bcrypt.hash(params.body.password, 10);
    }

    // copy params to user and save

    await model.University.update({

        univeristy: params.university,
        major: params.major,
        degree: params.field,
        university_country: params.university_country,
        university_city: params.university_city,
        }, {
            where: {id: user.university_id}
    })

    await model.Mentor.update({

        job: params.job,
        job_country: params.job_country,
        job_city: params.job_city,
        }, {
            where: {user_id: user.id}
    })
    

    await model.User.update({
        
        first_name: params.first_name,
        last_name: params.last_name,
        password: params.passwords,
        dob: params.dob,
        country_code: params.country_code,
        mobile_phone: params.mobile_phone,
        country: params.country,
        city: params.city,
        profile_picture: params.profile_picture
      }, {
          where: {id: user.id}
      })

      

    return "User updated";
}

function omitHash(user) {
    const { password, ...userWithoutHash } = user;
    return userWithoutHash;
}

// if statement is not working only works if not valid
async function getUser(params){
    const user = await business_inteligence.getUser(params.token)
    if (!user){
        return 'User not found';
    } 
    return user;
}

async function getAllUsers(){
   const users = await model.User_Type.findAll();
    if (!users){
        return 'Users not found';
    } 
    return users;
}