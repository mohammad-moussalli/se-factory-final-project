const model = require('../models')

module.exports = {
    create,
    getReports,
    update,
    delete: _delete,
}

async function create(params) {
    // validate
 
    if (await model.Report.findOne({ where: { link: params.link } })) {
        return "Report already exists"
    }
    // save faq
    await model.Report.create({title: params.title,
                            screenshot: params.screenshot,
                            link:params.link            
                            });
    return "Report created successfully"
}

async function getReports() {
    const reports = await model.Report.findAll();
    if (Object.keys(reports).length === 0){
        return {message: 'Reports not found'};
    }
    return reports;
}

async function getReport(id) {
    const report = await model.Report.findByPk(id);
    if (!report){
        return {message: 'Report not found'};
    }
    return report;
}

async function update(params) {
    const report = await getReport(params.id);
    // validate
    const reportChanged = report.title !== params.title || report.link !== params.link || report.screenshot !== params.screenshot
    if (reportChanged && await model.Report.findOne({ where: { title: params.title, screenshot: params.screenshot, link:params.link } })) {
        return 'Report already exists';
    }

    model.Report.update(
        { title: params.title, screenshot: params.screenshot, link:params.link},	
        { where: { id: params.id } },	 
      )
    
    return "Updated Successfuly";
}

async function _delete(id) {
    const report = await getReport(id);
    if (!report.id){
        return 'Report is not found';
    }
    await report.destroy();
    return 'Report deleted successfully';
}