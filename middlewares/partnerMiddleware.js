var dotenv = require('dotenv');
dotenv.config();
const { searchPartnerById } = require('../controllers/partnerController');

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

module.exports = {
    checkIfPartnerExistsMiddleware
}