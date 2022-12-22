let { hsPackageContact } = require('../utils/contactUtil')
let contactToPartnerNormalizer = require('../normalizers/contactToPartnerNormalizer')

const contactChangeHandlingMiddleware = async(req, res, next) => {
    try {
        let change = req.body
        let _change = hsPackageContact(change); // Package the change object
        let contactId = _change.hs_object_id; // Grabbing the contactId so we can get the full record from hubspot
        req.body.contactId = contactId // Store the contactId to the request body for retrieval in other functionality
        let normalized = contactToPartnerNormalizer(_change); // Normalize change record to be sent to NAF Link Partners
        return res.send(normalized)
        req.body.hsRecord = normalized; // Add normalized Partner data to req.body
        return next() // And let's go see if there's an existing record so we know whether to create or update
    } catch (error) {
        let err = error
        return next(err)
    }
}

module.exports = {
    contactChangeHandlingMiddleware
}