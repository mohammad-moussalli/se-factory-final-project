const model = require('../models')

module.exports = {
    create,
    getTeam,
    update,
    delete: _delete,
}

async function create(params) {
    // validate
    
    if (await model.Team.findOne({ where: { name: params.name, type: params.type, position: params.position, role: params.role } })) {
        return "Member already exists"
    }
    // Save Member
    await model.Team.create({name: params.name, type: params.type, position: params.position, role: params.role, profile_picture: params.profile_picture });
    return "Member created successfully"
}

async function getTeam() {
    return await model.Team.findAll();}


async function update(params) {
    const member = await model.Team.findOne({ where:{ id: params.id} });

    if(!params.type){
        params.type = member.type;
    }
    if(!params.name){
        params.name = member.name;
    }
    if(!params.position){
        params.position = member.position;
    }
    if(!params.role){
        params.role = member.role;
    }
    if(!params.profile_picture){
        params.profile_picture = member.profile_picture;
    }
    model.Team.update(
        { name: params.name, type: params.type, position: params.position, role: params.role, profile_picture: params.profile_picture  },	
        { where: { id: member.id } },	 
      )
    
    return "Updated Successfuly";
}

async function _delete(id) {
    const member = await model.Team.findOne({ where:{ id: params.id} });
    if (!member.id){
        return 'Member is not found';
    }
    await member.destroy();
    return 'Member deleted successfully';
}


