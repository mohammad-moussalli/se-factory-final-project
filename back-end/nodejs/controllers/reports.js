const reportServices = require ("../services/reports");

module.exports = {
    create,
    getReports,
    update,
    delete: _delete,
}

async function create(req, res, err) {
    try{
        const message = await reportServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getReports(req, res, err) {
    try{
        const response = await reportServices.getReports()
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const message = await reportServices.update(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await reportServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

