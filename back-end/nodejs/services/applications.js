const model = require('../models');
var scholarships = require('./scholarships');
const business_inteligence = require('../business_intelligence/permissions')

module.exports = {
    createScholarshipApplication,
    createStudentBuddyApplication,
    createMentorBuddyApplication,
    getScholarshipRecords,
    getMentorApplication,
    getStudentApplication,
    getScholarshipApplication
};

async function createScholarshipApplication(body) {
    if (await model.Scholarship_Application.findOne({ where: { user_id: body.user_id, cycle_id: body.cycle_id } })) {
        return "You already submitted an application"
    }
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

async function getMentorApplication(token) {
    let user =  await business_inteligence.getUser(token)
    const mentor_application = await model.Mentor_Buddy_Application.findOne({where:{user_id: user.id}})
    if (mentor_application) {
        return true
    }
    return false
}

async function getStudentApplication(token) {
    let user =  await business_inteligence.getUser(token)
    const student_application = await model.Student_Buddy_Application.findOne({where:{user_id: user.id}})
    if (student_application) {
        return true
    }
    return false
}

async function getScholarshipApplication(token) {
    let user =  await business_inteligence.getUser(token)
    const scholarship_application = await model.Scholarship_Application.findOne({where:{user_id: user.id}})
    if (scholarship_application) {
        return true
    }
    return false
}

async function getScholarshipRecords() {
    const scholarships_cycle = await model.Scholarship_Cycle.findAll();
    const cycle_records = scholarships_cycle.map( async (scholarship_cycle) => {
    let cycle_applicants = await model.Scholarship_Application.count({
        where: { cycle_id: scholarship_cycle.id },
        attributes: ['cycle_id']
      });
    let cycle_recepients = await model.Scholarship_Application.count({
    where: { cycle_id: scholarship_cycle.id, accepted: 1 },
    });
    let scholarship = await scholarships.getScholarship(scholarship_cycle.scholarship_id)
    let name = scholarship.dataValues.name 
    let cycle = scholarship_cycle.dataValues.cycle
    let scholarship_id = scholarship_cycle.dataValues.scholarship_id
    let cycle_id = scholarship_cycle.dataValues.cycle_id

        return {cycle_applicants, cycle_recepients, name, cycle, scholarship_id, cycle_id}
    })
    const all_records = await Promise.all(cycle_records)

    return all_records
}