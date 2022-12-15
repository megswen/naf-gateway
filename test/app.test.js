const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const app = require('../index');
const { searchPartnerById } = require('../controllers/partnerController');

describe('Check For Existing Partner Test', () => {
    it('Should return true or false depending on whether or not the Partner passed in exists', async() => {
        let partnerId = '3013f958-4557-4d8d-a1f7-763f306a458e';
        let nafToken = process.env.NAF_ACCESS_TOKEN;
        let partnerExists = await searchPartnerById(partnerId, nafToken);
        console.log(partnerExists);
        // expect(partnerExists).to.equal(true);
    })
})