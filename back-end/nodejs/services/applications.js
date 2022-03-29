const model = require('../models');
const { Sequelize } = require('sequelize');

module.exports = {
    createScholarshipApplication,
    createStudentBuddyApplication,
    createMentorBuddyApplication
};


async function createScholarshipApplication(params) {
  
    if (await model.Scholarship_Application.findOne({ where: { user_id: params.user_id, cycle_id: params.cycle_id } })) {
        return "You already submitted an application"
    }
    // save application
    await model.Scholarship_Application.create({
        user_id: params.user_id,
        cycle_id: params.cycle_id,
        scholarship_id: params.scholarship_id,
        accepted: '',
        amount: '',
        currency: '',
        degree: params.degree,
        major: params.major,
        semester_tuition_fee: params.semester_tuition_fee,
        monthly_allowance: params.monthly_allowance          
    });
    return "Application created successfully"
}

async function createStudentBuddyApplication(params) {
  
    if (await model.Student_Buddy_Application.findOne({ where: { user_id: params.user_id} })) {
        return "You already submitted an application"
    }
    // save application
    await model.Student_Buddy_Application.create({
        user_id: params.user_id,
        degree: params.degree,
        major: params.major,
        field: params.field,         
    });
    return "Application created successfully"
}

async function createMentorBuddyApplication(params) {
  
    if (await model.Mentor_Buddy_Application.findOne({ where: { user_id: params.user_id} })) {
        return "You already submitted an application"
    }
    // save application
    await model.Mentor_Buddy_Application.create({
        user_id: params.user_id,
        degree: params.degree,
        major: params.major,
        study_field: params.study_field,   
        work_field: params.work_field,         
        company: params.company,         
        position: params.position,         
    });
    return "Application created successfully"
}