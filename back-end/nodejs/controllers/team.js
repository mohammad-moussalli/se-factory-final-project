const teamServices = require ("../services/teams");

module.exports = {
    create,
    getTeam,
    update,
    delete: _delete,
}

async function create(req, res, err) {
    try{
        const message = await teamServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getTeam(req, res, err) {
    try{
        const response = await teamServices.getTeam()
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const message = await teamServices.update(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await teamServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}