const contactToPartnerNormalizer = (data) => {
    // How do I set up a record to fit into the update and post api endpoints?
    const propertyNames = Object.keys(data);
    let partner = {};
    let profile = {};
    let contactInfo = {};
    let company = {};
    let mailAddress = {};
    let companyAddress = {};

    propertyNames.forEach(name => {
        switch (name) {
            case 'firstname':
                profile.firstName = data[name];
                break;
            case 'lastname':
                profile.lastName = data[name];
                break;
            case 'preferredname':
                profile.aka = data[name];
                break;
            case 'jobtitle':
                profile.jobTitle = data[name];
                break;
            case 'nafconnect':
                profile.isNAFConnect = data[name];
                break;
            case 'license':
                profile.license = data[name];
                break;
            case 'phone':
                contactInfo.officePhone = data[name];
                break;
            case 'homephone':
                contactInfo.homePhone = data[name];
                break;
            case 'fax':
                contactInfo.fax = data[name];
                break;
            case 'email':
                contactInfo.workEmail = data[name];
                break;
            case 'home_email':
                contactInfo.homeEmail = data[name];
                break;
            case 'date_of_birth':
                contactInfo.birthday = data[name];
                break;
            case 'company':
                company.name = data[name];
                break;
            case 'doingbusinessas':
                company.displayName = data[name];
                break;
            case 'mailing_street_address':
                mailAddress.line1 = data[name];
                break;
            case 'mailing_street_address_2':
                mailAddress.line2 = data[name];
                break;
            case 'mailing_city':
                mailAddress.city = data[name];
                break;
            case 'mailing_state_region':
                mailAddress.state = data[name]
                break;
            case 'mailing_postal_code':
                mailAddress.zipCode = data[name]
                break;
            case 'address':
                companyAddress.line1 = data[name];
                break;
            case 'address2':
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
            case 'naflink_partnerId':
                partner.partnerId = data[name];
                break;
            default:
                break;
        };
    });


    partner.profile = profile;
    partner.contactInfo = contactInfo;
    partner.company = company;
    partner.mailAddress = mailAddress;
    partner.companyAddress = companyAddress;

    return partner;
};

module.exports = contactToPartnerNormalizer;