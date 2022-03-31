const contactUsServices = require ("../services/contact_us");

module.exports = {
    create,
}

async function create(req, res, err) {
    try{
        const message = await contactUsServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

