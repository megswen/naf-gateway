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
                'Authorization': `Bearer ${process.env.HS_ACCESS_TOKEN}`, // Authenticating with access token from private app
                'Content-Type': 'application/json',
                'accept': 'application/json',
                "Accept-Encoding": "gzip,deflate,compress" // This is because axios was throwing an "unexpected end of file" error adn this fixed it
            },
            data: { properties }
        });

        return hubspotResponse;
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    setHSContactPartnerId
}