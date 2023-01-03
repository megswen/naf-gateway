const { setHSContactPartnerId } = require('../controllers/contactController')

const setHSContactPartnerIdMiddleware = async(req, res, next) => {
    try {
        const partnerId = req.body.partnerId; // Or whatever it's called
        const contactId = req.body.change.hs_object_id; // ????
        await setHSContactPartnerId(partnerId, contactId);

        return res.sendStatus(200);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    setHSContactPartnerIdMiddleware
}