const webinarServices = require ("../services/webinars");

module.exports = {
    create,
    getWebinar,
    getWebinars,
    getWebinarByCountry,
    update,
    delete: _delete,
}

async function create(req, res, err) {
    try{
        const message = await webinarServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getWebinar(req, res, err) {
    try{
        const response = await webinarServices.getWebinar(req.params.id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getWebinars(req, res, err) {
    try{
        const response = await webinarServices.getWebinars(req.params.id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getWebinarByCountry(req, res, err) {
    try{
        const response = await webinarServices.getWebinarByCountry(req.body)
        return res.status(200).json(response)

    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const message = await webinarServices.update(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await webinarServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}