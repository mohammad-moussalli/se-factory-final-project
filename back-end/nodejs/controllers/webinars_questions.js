const webinarQuestionServices = require ("../services/webinars_questions");

module.exports = {
    getQuestion,
    getQuestions,
    createQuestions,
    deleteQuestions,
    update,
    delete: _delete,
}

async function createQuestions(req, res, err) {
    try{
        const message = await webinarQuestionServices.createQuestions(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getQuestion(req, res, err) {
    try{
        const response = await webinarQuestionServices.getQuestion(req.params.id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getQuestions(req, res, err) {
    try{
        const response = await webinarQuestionServices.getQuestions(req.params.webinar_id)
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const response = await webinarQuestionServices.update(req.body)
        return res.status(200).json({message : message})

    }catch(err){
        (res.status(400).json(err));
    }
}

async function deleteQuestions(req, res, err) {
    try{
        const message = await webinarQuestionServices.deleteQuestions(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await webinarQuestionServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}