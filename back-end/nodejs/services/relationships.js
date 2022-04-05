const model = require('../models')

module.exports = {
    create,
    getMentorShip,
    getMentorships,
    getMentorshipsByMentorId,
    getMentorshipsByStudentId,
    delete: _delete,
}

async function create(params) {
    // validate
    
    if (await model.Mentorship.findOne({ where: { student_id: params.student_id, mentor_id: params.mentor_id } })) {
        return "Mentorship already exists"
    }
    // save webinar
    await model.Mentorship.create({ student_id: params.student_id, mentor_id: params.mentor_id });
    return "Mentorship created successfully"
}

async function getMentorShip(id) {
    const mentorship = await model.Mentorship.findByPk(id);
    if (!mentorship){
        return {message: 'Mentorship not found'};
    }
    return mentorship;
}

async function getMentorships() {
    return await model.Mentorship.findAll();}

async function getMentorshipsByStudentId(body) {
    const mentorships = await model.Mentorship.findAll({student_id: body.student_id})
    if (!mentorships){
        return {message: 'Mentorships not found'};
    }
    return mentorships;
}

async function getMentorshipsByMentorId(body) {
    const mentorships = await model.Mentorship.findAll({mentor_id: body.mentor_id})
    if (!mentorships){
        return {message: 'Mentorships not found'};
    }
    return mentorships;
}

async function _delete(id) {
    const mentorship = await getMentorShip(id);
    if (!mentorship.id){
        return 'Mentorship is not found';
    }
    await mentorship.destroy();
    return 'Mentorship deleted successfully';
}


