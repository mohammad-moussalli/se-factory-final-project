const model = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const admin = require("../config/firebase");
const config = require('../config/config.json');
const business_inteligence = require('../business_intelligence/permissions')
module.exports = {
    create,
    login,
    update,
    getUser,
    getAllUsers,
    // uploadImage
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
async function update(body, token) {
    let user =  await business_inteligence.getUser(token)
    // validate
    // const userChanged = params.body.email && user.email !== params.body.email;
    // if (userChanged && await model.User.findOne({ where: { email: params.body.email } })) {
    //     return {message: 'Email "' + params.body.email + '" is already taken'};
    // }

    // hash password if it was entered
    if (body.password) {
        body.password = await bcrypt.hash(params.body.password, 10);
    }

    // copy params to user and save

    await model.University.update({

        univeristy: body.university,
        major: body.major,
        degree: body.field,
        university_country: body.university_country,
        university_city: body.university_city,
        }, {
            where: {id: user.university_id}
    })

    await model.Mentor.update({

        job: body.job,
        job_country: body.job_country,
        job_city: body.job_city,
        }, {
            where: {user_id: user.id}
    })
    

    await model.User.update({
        
        first_name: body.first_name,
        last_name: body.last_name,
        password: body.passwords,
        dob: body.dob,
        country_code: body.country_code,
        mobile_phone: body.mobile_phone,
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

// if statement is not working only works if not valid
async function getUser(token){
    const user = await business_inteligence.getUser(token)
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

// async function uploadImage(req){
//     const BusBoy = require("busboy");
//     const path = require("path");
//     const os = require("os");
//     const fs = require("fs");
//     console.log('req.files outside: ', req.files);
//     const filepath = path.join(os.tmpdir(), req.files[0].originalname);
//     const imageToUpload = { filepath, mimetype: req.files[0].mimetype };

//     admin
//     .storage()
//     .bucket()
//     .upload(imageToUpload.filepath, {
//       resumable: false,
//       metadata: {
//         metadata: {
//           contentType: imageToUpload.mimetype,
//         },
//       },
//     })
//     .then(() => {
//       imageUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.STORAGE_BUCKET}/o/${imageFileName}?alt=media`;
//       return imageUrl;
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
  
    // const busboy = new BusBoy({ headers: req.headers });
    // req.pipe(busboy); 
    // let imageFileName;
    // let imageToUpload = {};
    // let imageUrl;

    // console.log("outside", req.headers)
  
    // busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {

    // console.log("inside", file, filename)


    //   if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
    //     return res.status(400).json({ error: "Wrong file type submitted" });
    //   }
    //   //to get file type (png, jpeg)
    //   const imageExtension = filename.split(".")[filename.split(".").length - 1];
    //   imageFileName = `${Math.random(
    //     Math.random() * 10000000000
    //   )}.${imageExtension}`;
    //   const filepath = path.join(os.tmpdir(), imageFileName);
    //   imageToUpload = { filepath, mimetype };
    //   const fiiile = fs.createWriteStream(filepath);
    // });

    // busboy.on('error', (err) => { console.log(err, "error") })
  
    // busboy.on("finish", () => {
    //     console.log("finish", imageToUpload)
    //   admin
    //     .storage()
    //     .bucket()
    //     .upload(imageToUpload.filepath, {
    //       resumable: false,
    //       metadata: {
    //         metadata: {
    //           contentType: imageToUpload.mimetype,
    //         },
    //       },
    //     })
    //     .then(() => {
    //       imageUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.STORAGE_BUCKET}/o/${imageFileName}?alt=media`;
    //       return imageUrl;
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //       return res.status(500).json({ error: err.code });
    //     });
    // });
  
    // busboy.end(req.rawBody);
//  }
