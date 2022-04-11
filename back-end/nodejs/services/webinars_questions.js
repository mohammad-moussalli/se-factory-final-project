const model = require('../models')

module.exports = {
    getQuestion,
    getQuestions,
    createQuestions,
    deleteQuestions,
    update,
    delete: _delete,
}

async function getQuestions(webinar_id) {
    const webinar_questions = await model.Webinar_Questions.findAll({where:{webinar_id: webinar_id}})
    if(!webinar_questions){
        return "Webinar questions not found";
    }
    return webinar_questions;
}

async function getQuestion(id) {
    const webinar_question = await model.Webinar_Questions.findByPk(id);
    if (!webinar_question){
        return {message: 'Webinar question not found'};
    }
    return webinar_question;
}

async function createQuestions(params) {
    const webinar = await model.Webinar.findByPk(params.webinar_id)
    if (!webinar){
        return "Webinar Not Found"
    }
    if (await model.Webinar_Questions.findOne({ where: { webinar_id: params.webinar_id, question: params.question, answer: params.answer } })) {
        return "Webinar question already exists"
    }
    await model.Webinar_Questions.create({webinar_id: params.webinar_id, question: params.question, answer: params.answer });
    return "Webinar question created successfully"
}

async function update(params) {
    const webinar_question = await getQuestion(params.id);
    if(webinar_question.message === "Webinar question not found"){
        return 'Webinar not found'
    }
    if (!params.country){
        params.country = webinar_question.country
    }
    if (!params.answer){
        params.answer = webinar_question.answer
    }
    if (!params.webinar_id){
        params.webinar_id = webinar_question.webinar_id
    }
    const webinarQuestionChanged = webinar_question.webinar_id !== params.webinar_id || webinar_question.question !== params.question || webinar_question.answer !== params.answer;
    if (webinarQuestionChanged && await model.Webinar_Questions.findOne({ where: { webinar_id :params.webinar_id, question :params.question } })) {
        return 'Webinar Question already exists';
    }

    model.Webinar_Questions.update(
        { webinar_id : params.webinar_id, question : params.question, answer : params.answer  },	
        { where: { id: params.id } },	 
      )
    
    return "Updated Successfuly";
}

async function _delete(id) {
    const question = await getQuestion(id);
    if (!question.id){
        return 'Question is not found';
    }
    await question.destroy();
    return 'Question deleted successfully';
}

async function deleteQuestions(params) {
    const questions = await getQuestions(params.country);
    if (!questions){
        return 'Questions are not found';
    }
    await model.Webinar_Questions.destroy({
        where:{webinar_id: questions.webinar_id}
    })
    return 'Questions deleted successfully';
}