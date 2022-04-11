const model = require('../models')

module.exports = {
    getAll,
    create,
    getStory,
    update,
    delete: _delete,
};

async function getAll() {
    return await model.Story.findAll();
}

async function create(params) {
    if (await model.Story.findOne({ where: { name: params.name } })) {
        return "Story already exists";
    }
    await model.Story.create({name: params.name, story: params.story, picture: params.picture});
    return "Story created successfully";
}

async function getStory(id) {
    const story = await model.Story.findByPk(id);
    if (!story){
        return 'Story not found';
    }
    return story;
}

async function update(id, story) {
    const get_story = await getStory(id);
    if (!get_story.id){
        return "Story not found"
    }

    await get_story.update(
        { story: story},	
        { where: { id: id } },	 
      )

    return "Updated Successfully";
}

async function _delete(id) {
    const story = await getStory(id);
    if (!story.id){
        return 'Story is not found';
    }
    await story.destroy();
    return 'Story deleted successfully';
}

