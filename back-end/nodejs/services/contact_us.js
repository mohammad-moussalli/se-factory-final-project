const model = require('../models')

module.exports = {
    create,
}

async function create(params) {
  
    // save category
    await model.Contact_Us.create({email: params.email, full_name:params.full_name, subject: params.subject, message:params.message});
    return "Message submitted successfully"
}
