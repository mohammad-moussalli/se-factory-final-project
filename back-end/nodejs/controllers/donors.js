const donorServices = require ("../services/donors");

module.exports = {
    create,
    getDonations
}

async function create(req, res, err) {
    try{
        const message = await donorServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getDonations(req, res, err) {
    try{
        const donations = await donorServices.getDonations(req.body)
        return res.status(200).res.json({donations: donations})

    }catch(err){
        (res.status(400).json(err));
    }
}