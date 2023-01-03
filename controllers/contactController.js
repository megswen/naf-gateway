const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const setHSContactPartnerId = async(partnerId, contactId) => {
    try {
        const properties = {
            naflink_partnerid: partnerId
        }

        let hubspotResponse = await axios({ // API call to HubSpot to set contact's partner ID after creation of a partner in NAFLink
            url: `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${process.env.HS_AUTH_TOKEN}`, // Authenticating with access token from private app
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            data: { properties }
        });

        console.log(hubspotResponse);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    setHSContactPartnerId
}