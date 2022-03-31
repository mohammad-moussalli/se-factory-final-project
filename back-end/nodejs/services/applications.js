const model = require('../models');
const { Sequelize } = require('sequelize');
var scholarships = require('./scholarships');

module.exports = {
    createScholarshipApplication,
    createStudentBuddyApplication,
    createMentorBuddyApplication,
    getScholarshipRecords
};


async function createScholarshipApplication(body) {
    if (await model.Scholarship_Application.findOne({ where: { user_id: body.user_id, cycle_id: body.cycle_id } })) {
        return "You already submitted an application"
    }
    // save application
    await model.Scholarship_Application.create({
        user_id: body.user_id,
        cycle_id: body.cycle_id,
        accepted: false,
        amount: 0,
        currency: '',
        degree: body.degree,
        major: body.major,
        semester_tuition_fee: body.semester_tuition_fee,
        monthly_allowance: body.monthly_allowance          
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

async function getScholarshipRecords() {
    const scholarship_cycle = await model.Scholarship_Cycle.findAll();
    const cycle_records = scholarship_cycle.map( async (scholarship_cycle) => {
    let cycle_applicants = await model.Scholarship_Application.count({
        where: { cycle_id: scholarship_cycle.id },
        attributes: ['cycle_id']
      });

    let cycle_recepients = await model.Scholarship_Application.count({
    where: { cycle_id: scholarship_cycle.id, accepted: 1 },
    });
    let scholarship = await scholarships.getScholarship(scholarship_cycle.scholarship_id)

        return {cycle_applicants, cycle_recepients}
    })
    const all_records = await Promise.all(scholarship_cycle, cycle_records)
    return all_records
}