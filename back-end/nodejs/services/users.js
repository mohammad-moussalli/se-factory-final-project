const model = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config.json');
const business_inteligence = require('../business_intelligence/permissions')
const queryString = require('query-string');
const { cloudinary } = require('../config/cloudinary');

var express = require('express');
var router = express.Router();
var axios = require('axios');

module.exports = {
    create,
    login,
    update,
    getUser,
    getAllUsers,
    getAllMentors,
    getAllStudents,
    updatePicture
};

async function login({ email, password }) {
    const user = await model.User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password)))
        return false;

    const token = jwt.sign({ email: user.email }, config.secret, { expiresIn: '7d' });
    return token;
}


async function create(params) {

    if (await model.User.findOne({ where: { email: params.email } })) {
        throw new Error (`Email ${params.email} is already taken`);
    }
    if (params.password) {
        params.password = await bcrypt.hash(params.password, 10);
    }
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
        profile_picture:'https://res.cloudinary.com/kaffi-lb/image/upload/v1649278237/kaffi-lb/AvatarProfilePicture_aw0wtq.png',
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

    return token;
}

async function update(body, token) {
    let user =  await business_inteligence.getUser(token)

    const university = await model.University.findOne({where:{id: user.university_id}})
    const mentor = await model.Mentor.findOne({where:{user_id: user.id}})
   
    if (body.password) {
        body.password = await bcrypt.hash(params.body.password, 10);
    }

    if(!body.university){
        body.university = university.university;
    }
    if(!body.university_country){
        body.university_country = university.university_country;
    }
    if(!body.university_city){
        body.university_city = university.university_city;
    }
    await model.University.update({

        university: body.university,
        university_country: body.university_country,
        university_city: body.university_city,
        }, {
            where: {id: user.university_id}
    })

    if(mentor){
        if(!body.job){
            body.job = mentor.job;
        }
        if(!body.job_country){
            body.job_country = mentor.job_country;
        }
        if(!body.job_city){
            body.job_city = mentor.job_city;
        }

        await model.Mentor.update({

            job: body.job,
            job_country: body.job_country,
            job_city: body.job_city,
            }, {
                where: {user_id: user.id}
        })
    }
 
    
    if(!body.country){
        body.country = user.country;
    }
    if(!body.city){
        body.city = user.city;
    }
    if(!body.profile_picture){
        body.profile_picture = user.profile_picture;
    }
    await model.User.update({
        
        password: body.password,
        country: body.country,
        city: body.city,
        profile_picture: body.profile_picture
      }, {
          where: {id: user.id}
      })

    return user;
}

function omitHash(user) {
    const { password, ...userWithoutHash } = user;
    return userWithoutHash;
}

async function getUser(token){
    const user = await business_inteligence.getUser(token);
    const university = await model.University.findOne({attributes: {exclude: ['id']}, where: {id: user.university_id }});
    const user_type = await model.User_Type.findOne({attributes: {exclude: ['id']}, where: {id: user.user_type_id }});
    if (!user){
        return false;
    }
    const merged = Object.assign({}, user, university.dataValues, user_type.dataValues)
    return merged;
}

async function getAllUsers(){
   const users = await model.User.findAll();
    if (!users){
        return 'Users not found';
    } 
    return users;
}

async function getAllStudents(){
    const users = await model.User.findAll({where:{user_type_id:2}});
     if (!users){
         return 'Students not found';
     } 
     return users;
}

async function getAllMentors(){
    const users = await model.User.findAll({where:{user_type_id:3}});
    if (!users){
        return 'Mentors not found';
    } 
    return users;
}

async function updatePicture(body, token){
    let user =  await business_inteligence.getUser(token)
    const fileStr = body.data;
    const uploaded = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'ml_default',
    });
    await model.User.update({
        profile_picture: uploaded.url
      }, {
          where: {id: user.id}
      })
  
    return uploaded.url
}


