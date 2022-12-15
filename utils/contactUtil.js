const hsPackageContact = (contactRecord) => { // assume were being passed req.body
    let packaged = {};
    for (const [key, value] of Object.entries(contactRecord.properties)) { // loop through properties of record
        packaged[key] = value.value // assign key value pair to packaged variable
    }

    return packaged;

}

module.exports = {
    hsPackageContact
}