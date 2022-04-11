const model = require('../models')

module.exports = {
    create,
    getFaqs,
    getFaq,
    update,
    delete: _delete,
    deleteCategoryFaqs,
}

async function create(params) {
    if(!await model.Faq_Category.findByPk(params.category_id)){
        return "FAQ Category doens't exist";
    }
    if (await model.Faq.findOne({ where: { category_id: params.category_id, question: params.question } })) {
        return "Faq already exists"
    }
    await model.Faq.create({category_id: params.category_id,
                            question: params.question,
                            answer: params.answer            
                            });
    return "Faq created successfully"
}

async function getFaqs(category_id) {
    const faqs = await model.Faq.findAll({where: {category_id: category_id}});
    if (Object.keys(faqs).length === 0){
        return {message: 'Category is not found'};
    }
    return faqs;
}

async function getFaq(id) {
    const faq = await model.Faq.findByPk(id);
    if (!faq){
        return {message: 'FAQ not found'};
    }
    return faq;
}

async function update(params) {
    const faq = await getFaq(params.id);
    const faqChanged = faq.category_id !== params.category_id || faq.question !== params.question || faq.answer !== params.answer;
    if (faqChanged && await model.Faq.findOne({ where: { question: params.question, category_id:params.category_id } })) {
        return 'FAQ already exists';
    }

    model.Faq.update(
        { category_id: params.category_id, question: params.question, answer: params.answer},	
        { where: { id: params.id } },	 
      )
    
    return "Updated Successfuly";
}

async function _delete(id) {
    const faq = await getFaq(id);
    if (!faq.id){
        return 'Faq is not found';
    }
    await faq.destroy();
    return 'FAQ deleted successfully';
}

async function deleteCategoryFaqs(params) {
    if(!await model.Faq_Category.findByPk(params.category_id)){
        return "FAQ Category doens't exist";
    }
    await model.Faq.destroy({
        where:{category_id: params.category_id}
    });
    return  'FAQs deleted successfully';
}