const model = require('../models')
const business_intelligence = require('../business_intelligence/permissions')

module.exports = {
    create,
    getAll,
    getCategory,
    update,
    delete: _delete,
}

async function getCategory(id) {
    const faq_category = await model.Faq_Category.findByPk(id);
    if (!faq_category){
        return 'FAQ Category not found';
    }
    return faq_category;
}

async function create(params) {
    const isAdmin = await business_intelligence.hasPermission(params.token, "admin");
    if (isAdmin)
    {   
        if (await model.Faq_Category.findOne({ where: { category: params.category } })) {
            return "Category already exists"
        }
        await model.Faq_Category.create({category: params.category});
        return "Category created successfully"
    }
    return "You don't have permissions"
}

async function getAll() {
    const faqs = await model.Faq_Category.findAll();
    return faqs;
}

async function update(params) {
    const faq_category = await getCategory(params.id);

    const faqCategoryChanged = params.category && faq_category.category !== params.category;
    if (faqCategoryChanged && await model.Faq_Category.findOne({where:{category: params.category}})){
        return 'Category already exists';
    }

    model.Faq_Category.update(
        { category: params.category},	
        { where: { id: faq_category.id } },	 
      )
      return 'Category updated successfully';
    
}

async function _delete(id) {
    const faq_category = await getCategory(id);
    if (!faq_category.id){
        return 'Category is not found';
    }
    await faq_category.destroy();
    return 'Category deleted successfully';
}