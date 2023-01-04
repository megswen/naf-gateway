const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const app = require('../index');
const { setHSContactPartnerId } = require('../controllers/contactController');

describe('Check For Existing Partner Test', () => {
    it('Should return true or false depending on whether or not the Partner passed in exists', async() => {
        let partnerId = '3013f958-4557-4d8d-a1f7-763f306a458e';
        let contactId = '6251';
        let updateHsId = await setHSContactPartnerId(partnerId, contactId);
        console.log(updateHsId);
        // expect(partnerExists).to.equal(true);
    })
})