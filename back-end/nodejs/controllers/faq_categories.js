const faqsCategoryServices = require ("../services/faq_categories");

module.exports = {
    create,
    getAll,
    getCategory,
    update,
    delete: _delete,
}

async function create(req, res, err) {
    try{
        const message = await faqsCategoryServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getAll(req, res, err) {
    try{
        const response = await faqsCategoryServices.getAll()
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getCategory(req, res, err) {
    try{
        const category = await faqsCategoryServices.getCategoryId(req.params.id)
        return res.status(200).res.json(category)

    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const message = await faqsCategoryServices.update(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await faqsCategoryServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

