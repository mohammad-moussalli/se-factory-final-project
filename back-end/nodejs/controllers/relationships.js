const relationshipServices = require ("../services/relationships");

module.exports = {
    create,
    getMentorShip,
    getMentorships,
    getMentorshipsByMentorId,
    getMentorshipsByStudentId,
    delete: _delete,
}

async function create(req, res, err) {
    try{
        const message = await relationshipServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getMentorShip(req, res, err) {
    try{
        const response = await relationshipServices.getMentorShip(req.params.id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getMentorships(req, res, err) {
    try{
        const response = await relationshipServices.getMentorships(req.params.id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getMentorshipsByMentorId(req, res, err) {
    try{
        const response = await relationshipServices.getMentorshipsByMentorId(req.body)
        return res.status(200).json(response)

    }catch(err){
        (res.status(400).json(err));
    }
}

async function getMentorshipsByStudentId(req, res, err) {
    try{
        const response = await relationshipServices.getMentorshipsByStudentId(req.body)
        return res.status(200).json(response)

    }catch(err){
        (res.status(400).json(err));
    }
}


async function _delete(req, res, err) {
    try{
        const message = await relationshipServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}