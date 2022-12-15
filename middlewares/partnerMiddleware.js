var dotenv = require('dotenv');
dotenv.config();
const { searchPartnerById, updatePartner } = require('../controllers/partnerController');

const checkIfPartnerExistsMiddleware = async(req, res, next) => {
    try {
        const normalizedPartner = req.body.normalized;
        const partnerId = normalizedPartner.partnerId; // Or whatever it's called

        // Call NafLink with nafId and check for existing
        let exists = await searchPartnerById(partnerId, process.env.NAF_ACCESS_TOKEN);

        if(exists) {
            return next(); // Navigate to update middleware
        } else {
            return next('route'); // Navigate to create middleware
        }
    } catch(error) {
        return new Error(error);
    }
}

const updatePartnerMiddleware = async(req, res, next) => {
    try {
        const normalizedPartner = req.body.normalized;

        let update = await updatePartner(normalizedPartner, process.env.NAF_ACCESS_TOKEN);
        console.log("Partner updated");
        return next();
    } catch(error) {
        return new Error(error.stack);
    }
}

module.exports = {
    checkIfPartnerExistsMiddleware,
    updatePartnerMiddleware
}