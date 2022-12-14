const checkIfPartnerExistsMiddleware = async(req, res, next) => {
    try {
        const normalizedPartner = req.body.normalized;
        const nafId = normalizedPartner.nafId; // Or whatever it's called

        // Call NafLink with nafId and check for existing

    } catch(error) {
        return new Error(error);
    }
}

module.exports = {
    checkIfPartnerExistsMiddleware
}