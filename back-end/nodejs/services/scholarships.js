const model = require('../models');
const { Sequelize, Op } = require('sequelize');

module.exports = {
    getAll,
    create,
    getScholarship,
    getById,
    update,
    createCycle,
    getScholarshipCycle,
    delete: _delete,
    getScholarshipsWithCycle,
};

async function getAll() {
    return await model.Scholarship.findAll();
}

async function create(params) {
    // validate
    if (await model.Scholarship.findOne({ where: { name: params.name } })) {
        return "Name already exists";
    }
    // save scholarship
    await model.Scholarship.create({name: params.name});
    return "Scholarship created successfully";
}

async function createCycle(params){
    // validate
    const scholarship = await model.Scholarship.findOne({ where: { name: params.name } })
    if (scholarship && await model.Scholarship_Cycle.findOne({ where: { cycle:params.cycle, scholarship_id:scholarship.id, start_date:params.start_date, deadline:params.deadline, results:params.results} })) {
        return "Scholarship Cycle already exists";
    }
    
    if (!scholarship){
        return "Scholarship not Found";
    }

    await model.Scholarship_Cycle.create({  scholarship_id: scholarship.id,
                                            cycle: params.cycle,
                                            start_date: params.start_date,
                                            deadline: params.deadline,
                                            results: params.results
                                        })
    return "Scholarship cycle created succesfully";                                    
}

async function getScholarshipCycle(params) {
    const get_scholarship = await model.Scholarship.findOne({ where: { name: params.name } });
    if(!get_scholarship){
        return 'Scholarship not found'
    }
    const now = new Date()
    const d = new Date("2021-01-01")
    const scholarship = await model.Scholarship_Cycle.findOne(
        {where: { scholarship_id: get_scholarship.id, 
                  start_date: {[Op.lt]: new Date()},
                  deadline: {[Op.gt]: new Date()}},
         attributes: [Sequelize.fn('max', Sequelize.col('start_date')), 'id', 'scholarship_id', 'start_date', 'deadline', 'results', 'cycle']});
    if (!scholarship){
        return 'Scholarship cycle not found';
    }
    return scholarship;
}

async function getScholarship(id) {
    const scholarship = await model.Scholarship.findByPk(id);
    if (!scholarship){
        return 'scholarship not found';
    }
    return scholarship;
}

async function getScholarshipsWithCycle() {
    const scholarships = await getAll()
    const temp = scholarships.map( async (scholarship) => {
        let cycle =  await model.Scholarship_Cycle.findOne({
            where: {scholarship_id: scholarship.id}, 
            attributes: [Sequelize.fn('max', Sequelize.col('start_date')), 'id', 'scholarship_id', 'start_date', 'deadline', 'results', 'cycle']
        })
        return {scholarship, cycle}
    })
    const scholarshipsWithCycle = await Promise.all(temp)
    return scholarshipsWithCycle
}

async function getById(id) {
    return await getScholarship(id);
}

async function update(id, name) {
    const scholarship = await getScholarship(id);

    // validate
    const scholarshipNameChanged = name && scholarship.name !== name;
    if (scholarshipNameChanged && await model.Scholarship.findOne({ where: { name: name } })) {
        return 'Name "' + name + '" is already taken';
    }

    await model.Scholarship.update(
        { name: name},	
        { where: { id: id } },	 
      )
    
    return "Update Successfully";
      
    ;
}

async function _delete(id) {
    const scholarship = await getScholarship(id);
    if (!scholarship.id){
        return 'Scholarship is not found';
    }
    await scholarship.destroy();
    return 'Scholarship deleted successfully';
}

