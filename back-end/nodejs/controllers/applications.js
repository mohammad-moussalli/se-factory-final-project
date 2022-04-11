const applicationServices = require ("../services/applications");

module.exports = {
    createScholarshipApplication,
    createStudentBuddyApplication,
    createMentorBuddyApplication,
    getScholarshipRecords,
    getMentorApplication,
    getStudentApplication,
    getScholarshipApplication
}

async function createScholarshipApplication(req, res, err) {
    try{
        const message = await applicationServices.createScholarshipApplication(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function createStudentBuddyApplication(req, res, err) {
    try{
        const message = await applicationServices.createStudentBuddyApplication(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function createMentorBuddyApplication(req, res, err) {
    try{
        const message = await applicationServices.createMentorBuddyApplication(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getMentorApplication(req, res, err) {
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        const message = await applicationServices.getMentorApplication(token)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getStudentApplication(req, res, err) {
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        const message = await applicationServices.getStudentApplication(token)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getScholarshipApplication(req, res, err) {
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        const message = await applicationServices.getScholarshipApplication(token)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getScholarshipRecords(req, res, err) {
    try{
        const response = await applicationServices.getScholarshipRecords()
        return res.status(200).json({response: response})
    }catch(err){
        (res.status(400).json(err));
    }
}

