const blogServices = require ("../services/blogs");

module.exports = {
    create,
    getBlogs,
    update,
    delete: _delete,
}

async function create(req, res, err) {
    try{
        const message = await blogServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getBlogs(req, res, err) {
    try{
        const response = await blogServices.getBlogs()
        return res.status(200).json(response)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const message = await blogServices.update(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = await blogServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

