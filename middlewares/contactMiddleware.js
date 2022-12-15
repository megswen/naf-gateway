const contactChangeHandlingMiddleware = async(req, res, next) => {
    try{
        let change = req.body
        let _change = hsPackageContact(change); // Package the change object
        let contactId = _change.hs_object_id; // Grabbing the contactId so we can get the full record from hubspot
        req.body.contactId = contactId // Store the contactId to the request body for retrieval in other functionality
        let normalized = contactNormalizer(_change); // Normalize change record to be sent to OAO
        req.body.hsRecord = normalized; // Add normalized account to req.body
    }catch(error) {
        let err = error
        return next(err)
    }
}