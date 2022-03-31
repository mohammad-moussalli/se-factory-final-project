const faqsServices = require ("../services/faqs");

module.exports = {
    create,
    getFaq,
    getFaqs,
    update,
    delete: _delete,
    deleteCategoryFaqs
}

async function create(req, res, err) {
    try{
        const message = await faqsServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getFaq(req, res, err) {
    try{
        const response = await faqsServices.getFaq(req.params.id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getFaqs(req, res, err) {
    try{
        const response = await faqsServices.getFaqs(req.params.category_id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function deleteCategoryFaqs(req, res, err) {
    try{
        const message = await faqsServices.deleteCategoryFaqs(req.params)
        return res.status(200).json({ message: message })

    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const message = await faqsServices.update(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await faqsServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

