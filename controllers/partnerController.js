var dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const searchPartnerById = async(partnerId, nafToken) => {
    try {
        let partnerResponse = await axios({
            method: 'GET',
            url: `${process.env.NAF_BASE_URL}/partner/partners/${partnerId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': nafToken
            }
        });

        console.log(partnerResponse);
        if(partnerResponse) {
            return true;
        } else {
            return false;
        }
    } catch(error) {
        console.log(error);
        return new Error(error.stack);
    }
}

const updatePartner = async(partnerData, nafToken) => {
    try {
        const partnerId = partnerData.partnerId;

        let partnerResponse = await axios({
            method: 'PATCH',
            url: `${process.env.NAF_BASE_URL}/partner/partners/${partnerId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': nafToken
            },
            data: partnerData
        });

        console.log(partnerResponse);
        return partnerResponse;
    } catch(error) {
        return new Error(error.stack);
    }
}

module.exports = {
    searchPartnerById,
    updatePartner
}