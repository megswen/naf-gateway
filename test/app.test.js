const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect

const app = require('../index');
const contactToPartnerNormalizer = require('../normalizers/contactToPartnerNormalizer')
const { hsPackageContact } = require('../utils/contactUtil')


describe('Contact to Partner - Change Handling Functionality & Middleware Tests', () => {
    describe('Contact Packaging Tests', () => {
        let packagedContact = hsPackageContact( /* need sample */ )
        it('Should return an object', done => {})
        it('Should return an object with properties involved in the sync')
        it('Should maintain the values of properties after packaging')
    })
    describe('Contact Normalization Tests', () => {
        let normalizedPartner = contactToPartnerNormalizer( /* need sample */ )
        it('Should return an object', done => {})
        it('Should return an object with the right sub-object properties', done => {})
        it('Should sort the right properties into the right sub-objects', done => {})
        it('Should maintain the values of properties from the sample after normalization', done => {})
    })
    describe('Contact Change Handling Middleware Tests', () => {
        let testRes;
        before(done => {
            chai.request(app)
                .post('/contacts-to-partners')
                .send( /* need sample */ )
                .end(function(err, res) {
                    if (err) {
                        testRes.err = err;
                        done();
                    }
                    testRes = res.body;
                    testRes.err = null;
                    done()
                })
        })
        it('Should not return an error', done => {})
        it('Should return an object in the response body', done => {})
        it('Should return an object with the right sub-objects for syncing into NAF Link')
        it('Should return an object with the right properties for syncing into NAF Link sorted into the right sub-objects', done => {})
        it('Should return an object with the values of properties set to corresponding NAF Link properties maintained from the values of properties in the sample', done => {})
    })
})