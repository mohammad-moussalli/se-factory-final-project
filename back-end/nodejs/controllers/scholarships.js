const scholarshipServices = require ("../services/scholarships")


module.exports = {
    getAll,
    create,
    getScholarship,
    getById,
    update,
    _delete,
    createCycle,
    getScholarshipCycle,
    getScholarshipsWithCycle,
    getAllScholarshipsWithCycle
};

async function getAll(req, res, err) {
    try{
        const scholarship = await scholarshipServices.getAll()
        return res.status(200).json(scholarship)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function create(req, res, err) {
    try{
        const message = await scholarshipServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function createCycle(req, res, err) {
    try{
        const message = await webinarServices.scholarshipServices.createCycle(req.body)
        return res.status(200).res.json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getScholarship(req, res, err) {
    try{
        const message = await scholarshipServices.getScholarship(req.params.id)
        return res.status(200).json({message : message})

    }catch(err){
        (res.status(400).json(err));
    }
}

async function getScholarshipCycle(req, res, err) {
    try{
        const response = await scholarshipServices.getScholarshipCycle(req.params)
        return res.status(200).json({response : response})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getScholarshipsWithCycle(req, res, err) {
    try{
        const response = await scholarshipServices.getScholarshipsWithCycle()
        return res.status(200).json({response : response})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getAllScholarshipsWithCycle(req, res, err) {
    try{
        const response = await scholarshipServices.getAllScholarshipsWithCycle()
        return res.status(200).json({response : response})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getById(req, res, err) {
    try{
        const scholarship = await scholarshipServices.getById(req.params.id)
        return res.status(200).json(scholarship)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const scholarship = await scholarshipServices.update(req.body.id, req.body.name)
        return res.status(200).json(scholarship)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await scholarshipServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}
