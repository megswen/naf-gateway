const hsPackageContact = (contactRecord) => { // assume were being passed req.body
    try {
        let packaged = {};
        for (const [key, value] of Object.entries(contactRecord.properties)) { // loop through properties of record
            packaged[key] = value.value // assign key value pair to packaged variable
        }

        return packaged;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    hsPackageContact
}