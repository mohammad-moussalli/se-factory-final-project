const model = require('../models')

module.exports = {
    create,
    getBlogs,
    update,
    delete: _delete,
}

async function create(params) {
    // validate
 
    if (await model.Blog.findOne({ where: { link: params.link } })) {
        return "Blog already exists"
    }
    // save faq
    await model.Blog.create({title: params.title,
                            screenshot: params.screenshot,
                            text: params.text,
                            link:params.link            
                            });
    return "Blog created successfully"
}

async function getBlogs() {
    const blogs = await model.Blog.findAll();
    if (Object.keys(blogs).length === 0){
        return {message: 'Blogs not found'};
    }
    return blogs;
}

async function getBlog(id) {
    const blog = await model.Blog.findByPk(id);
    if (!blog){
        return {message: 'Blog not found'};
    }
    return blog;
}

async function update(params) {
    const blog = await getBlog(params.id);
    // validate
    const blogChanged = blog.title !== params.title || blog.text !== params.text || blog.link !== params.link || blog.screenshot !== params.screenshot
    if (blogChanged && await model.Blog.findOne({ where: { title: params.title, screenshot: params.screenshot, text: params.text, link:params.link } })) {
        return 'Blog already exists';
    }

    model.Blog.update(
        { title: params.title, screenshot: params.screenshot, text: params.text, link:params.link},	
        { where: { id: params.id } },	 
      )
    
    return "Updated Successfuly";
}

async function _delete(id) {
    const blog = await getBlog(id);
    if (!blog.id){
        return 'Blog is not found';
    }
    await blog.destroy();
    return 'Blog deleted successfully';
}