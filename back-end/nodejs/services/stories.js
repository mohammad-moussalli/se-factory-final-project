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
    // validate
    if (await model.Story.findOne({ where: { user_id: params.id } })) {
        return "User already exists";
    }

    const user = await model.User.findOne({ where: { id: params.id} });
    if (!user) {
        return "User doesn't exists";
    }
    // save story
    await model.Story.create({user_id: params.id, story: params.story});
    return "Story created successfully";
}

async function getStory(id) {
    const story = await model.Story.findByPk(id);
    if (!story){
        return 'Story not found';
    }
    return story;
}

/////validation is not working
async function update(id, story) {
    const get_story = await getStory(id);
    // validate
    if (!get_story.id){
        return "Story not found"
    }

    // update params to story and save but not working directly on postman
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

