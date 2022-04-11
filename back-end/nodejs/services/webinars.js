const model = require('../models')

module.exports = {
    create,
    getWebinar,
    getWebinars,
    getWebinarByCountry,
    update,
    delete: _delete,
}

async function create(params) {
    
    if (await model.Webinar.findOne({ where: { video_url: params.video_url, country: params.country } })) {
        return "Webinar already exists"
    }
    await model.Webinar.create({video_url: params.video_url, country: params.country });
    return "Faq created successfully"
}

async function getWebinar(id) {
    const webinar = await model.Webinar.findByPk(id);
    if (!webinar){
        return {message: 'Webinar not found'};
    }
    return webinar;
}

async function getWebinars() {
    return await model.Webinar.findAll();}

async function getWebinarByCountry(body) {
    const webinar_id = await model.Webinar.max('id', {where:{country: body.country}})
    if (!webinar_id){
        return {message: 'Webinar not found'};
    }
    return getWebinar(webinar_id);
}

async function update(params) {
    const webinar = await getWebinar(params.id);
    if (!params.country){
        params.country = webinar.country
    }
    if (!params.video_url){
        params.video_url = webinar.video_url
    }
    const webinarChanged = webinar.country !== params.country || webinar.video_url !== params.video_url;
    if (webinarChanged && await model.Webinar.findOne({ where: { video_url: params.video_url, country:params.country } })) {
        return 'Webinar already exists';
    }

    model.Webinar.update(
        { video_url: params.video_url, country:params.country },	
        { where: { id: params.id } },	 
      )
    
    return "Updated Successfuly";
}

async function _delete(id) {
    const webinar = await getWebinar(id);
    if (!webinar.id){
        return 'Webinar is not found';
    }
    await webinar.destroy();
    return 'Webinar deleted successfully';
}


