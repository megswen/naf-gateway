const contactToPartnerNormalizer = (data) => {
    const propertyNames = Object.keys(data);
    let partner = {}
    let profile = {}
    let contactInfo = {}
    let company = {}
    let mailAddress = {}
    let companyAddress = {}
    let licenses = {}

    propertyNames.forEach(name => {
        switch(name) {
            case 'firstname':
                profile.firstName = data[name];
                break;
            case 'lastname':
                profile.lastName = data[name];
                break;
            case '': // Nickname - TODO: fill HubSpot internal name for nickname field
                profile.aka = data[name];
                break;
            case 'jobtitle':
                profile.jobTitle = data[name];
                break;
            case '': // NAF Connect - TODO: fill HubSpot internal name for NAF Connect
                profile.isNAFConnect = data[name];
                break;
            case '': // License - TODO: fill HubSpot internal name for License
                profile.license = data[name];
                break;
            case 'phone':
                contactInfo.officePhone = data[name];
                break;
            case '': // Home Phone - TODO: fill HubSpot internal name for Home Phone
                contactInfo.homePhone = data[name];
                break;
            case 'fax':
                contactInfo.fax = data[name];
                break;
            case 'email':
                contactInfo.workEmail = data[name];
                break;
            case '': // Home email - TODO: fill HubSpot internal name for Home email
                contactInfo.homeEmail = data[name];
                break;
            case '': // birthday - TODO: fill HubSpot internal name for birthday
                contactInfo.birthday = data[name];
                break;
            case 'company':
                company.name = data[name];
                company.displayName = data[name]
                break;
            case '': // Mailing Street Address - TODO: fill HubSpot internal nme for Mailing Street Address 
                mailAddress.line1 = data[name];
                break;
            case '': // Mailing Street Address 2 - TODO: fill HubSpot internal nme for Mailing Street Address 2 
                mailAddress.line2 = data[name];
                break;
            case '': // Mailing City - TODO: fill HubSpot internal name for Mailing City
                mailAddress.city = data[name];
                break;
            case '': // Mailing State/Region - TODO: fill HubSpot internal name for Mailing State/Region
                mailAddress.state = data[name]
                break;
            case '': // Mailing Postal Code - TODO: fill HubSpot internal name for Mailing Postal Code
                mailAddress.zip = data[name]
                break;
            case 'address':
                companyAddress.line1 = data[name];
                break;
            case '': // Street Address 2 - TODO: fill HubSpot internal nme for Street Address 2 
                companyAddress.line2 = data[name];
                break;
            case 'city':
                companyAddress.city = data[name];
                break;
            case 'state':
                companyAddress.state = data[name];
                break;
            case 'zip':
                companyAddress.zipCode = data[name];
                break;
            // Need to figure out licenses
        }
    })
}

module.exports = contactToPartnerNormalizer