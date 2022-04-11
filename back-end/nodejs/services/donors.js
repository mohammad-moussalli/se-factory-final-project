const model = require('../models')

module.exports = {
    create,
    getDonations,
}

async function create(params) {

    await model.Donor.create({
        first_name: params.first_name,
        last_name: params.last_name,
        email: params.email,
        mobile_phone: params.mobile_phone,
        amount_donated: params.amount_donated,
        currency: params.currency,
        nationality: params.nationality});
    return "Donor created successfully"
}
async function getDonations(params) {
    const donations = await model.Donor
    if (Object.keys(donations).length === 0){
        return 'No donations found';
    }
    
    donations.sum('amount_donated', {where:{currency:params.currency}}).then(sum => {
        return (sum + " " + params.currency);
    });
}






