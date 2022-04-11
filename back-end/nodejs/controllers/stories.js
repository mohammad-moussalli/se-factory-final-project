const storyServices = require ("../services/stories")

module.exports = {
    getAll,
    create,
    getStory,
    update,
    _delete,
};

async function getAll(req, res, err) {
    try{
        const story = await storyServices.getAll()
        return res.status(200).json(story)
    }catch(err){
        (res.status(400).json(err));
    }
}

async function create(req, res, err) {
    try{
        const message = await storyServices.create(req.body)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function getStory(req, res, err) {
    try{
        const message = await storyServices.getStory(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}

async function update(req, res, err) {
    try{
        const story = await storyServices.update(req.body.id, req.body.story)
        return res.status(200).json(story)

    }catch(err){
        (res.status(400).json(err));
    }
}

async function _delete(req, res, err) {
    try{
        const message = storyServices.delete(req.params.id)
        return res.status(200).json({message : message})
    }catch(err){
        (res.status(400).json(err));
    }
}