const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect

const app = require('../index');
const contactToPartnerNormalizer = require('../normalizers/contactToPartnerNormalizer')
const { hsPackageContact } = require('../utils/contactUtil')
const { contactSample } = require('./samples/hsSamples')


describe('Contact to Partner - Change Handling Functionality & Middleware Tests', () => {
    // describe('Contact Packaging Tests', () => {
    //     let packagedContact = hsPackageContact(contactSample)
    //     it('Should return an object', done => {
    //         expect(packagedContact).to.be.an('object');
    //         done()
    //     })
    //     it('Should return an object with properties involved in the sync', done => {
    //         expect(packagedContact).to.haveOwnProperty('firstname')
    //         expect(packagedContact).to.haveOwnProperty('lastname')
    //         expect(packagedContact).to.haveOwnProperty('phone')
    //         expect(packagedContact).to.haveOwnProperty('email')
    //         expect(packagedContact).to.haveOwnProperty('company')
    //         done()
    //     })
    //     it('Should maintain the values of properties after packaging', done => {
    //         expect(packagedContact.firstname).to.equal(contactSample.properties.firstname.value)
    //         expect(packagedContact.lastname).to.equal(contactSample.properties.lastname.value)
    //         expect(packagedContact.phone).to.equal(contactSample.properties.phone.value)
    //         expect(packagedContact.email).to.equal(contactSample.properties.email.value)
    //         expect(packagedContact.company).to.equal(contactSample.properties.company.value)
    //         done()
    //     })
    // })
    // describe('Contact Normalization Tests', () => {
    //     let packaged = hsPackageContact(contactSample)
    //     let normalizedPartner = contactToPartnerNormalizer(packaged)
    //     it('Should return an object', done => {
    //         expect(normalizedPartner).to.be.an('object');
    //         done()
    //     })
    //     it('Should return an object with the right sub-object properties', done => {
    //         expect(normalizedPartner).to.haveOwnProperty('profile')
    //         expect(normalizedPartner).to.haveOwnProperty('company')
    //         expect(normalizedPartner).to.haveOwnProperty('contactInfo')
    //         expect(normalizedPartner).to.haveOwnProperty('mailAddress')
    //         expect(normalizedPartner).to.haveOwnProperty('companyAddress')
    //         done()
    //     })
    //     it('Should sort the right properties into the right sub-objects', done => {
    //         expect(normalizedPartner.profile).to.haveOwnProperty('firstName')
    //         expect(normalizedPartner.profile).to.haveOwnProperty('lastName')
    //         expect(normalizedPartner.company).to.haveOwnProperty('name')
    //         expect(normalizedPartner.companyAddress).to.haveOwnProperty('line1')
    //         expect(normalizedPartner.companyAddress).to.haveOwnProperty('city')
    //         expect(normalizedPartner.mailAddress).to.haveOwnProperty('line1')
    //         expect(normalizedPartner.mailAddress).to.haveOwnProperty('city')
    //         expect(normalizedPartner.contactInfo).to.haveOwnProperty('officePhone')
    //         expect(normalizedPartner.contactInfo).to.haveOwnProperty('workEmail')
    //         done()
    //     })
    //     it('Should maintain the values of properties from the sample after normalization', done => {
    //         expect(normalizedPartner.profile.firstName).to.equal(contactSample.properties.firstname.value)
    //         expect(normalizedPartner.profile.lastName).to.equal(contactSample.properties.lastname.value)
    //         expect(normalizedPartner.company.name).to.equal(contactSample.properties.company.value)
    //         expect(normalizedPartner.companyAddress.line1).to.equal(contactSample.properties.address.value)
    //         expect(normalizedPartner.companyAddress.city).to.equal(contactSample.properties.city.value)
    //         expect(normalizedPartner.mailAddress.line1).to.equal(contactSample.properties.mailing_street_address.value)
    //         expect(normalizedPartner.mailAddress.city).to.equal(contactSample.properties.mailing_city.value)
    //         expect(normalizedPartner.contactInfo.officePhone).to.equal(contactSample.properties.phone.value)
    //         expect(normalizedPartner.contactInfo.workEmail).to.equal(contactSample.properties.email.value)
    //         done()
    //     })
    // })
    describe('Contact Change Handling Middleware Tests', () => {
        let normalizedPartner;
        before(done => {
            chai.request(app)
                .post('/contacts-to-partners')
                .send(contactSample)
                .end(function(err, res) {
                    if (err) {
                        normalizedPartner.err = err;
                        done();
                    }
                    normalizedPartner = res.body;
                    normalizedPartner.err = null;
                    done()
                })
        })
        it('Should not return an error', done => {
            expect(normalizedPartner.err).to.be.null;
            done()
        })
        it('Should return an object in the response body', done => {
            expect(normalizedPartner).to.be.an('object');
            done()
        })
        it('Should return an object with the right sub-objects for syncing into NAF Link', done => {
            expect(normalizedPartner).to.haveOwnProperty('profile')
            expect(normalizedPartner).to.haveOwnProperty('company')
            expect(normalizedPartner).to.haveOwnProperty('contactInfo')
            expect(normalizedPartner).to.haveOwnProperty('mailAddress')
            expect(normalizedPartner).to.haveOwnProperty('companyAddress')
            done()
        })
        it('Should return an object with the right properties for syncing into NAF Link sorted into the right sub-objects', done => {
            expect(normalizedPartner.profile).to.haveOwnProperty('firstName')
            expect(normalizedPartner.profile).to.haveOwnProperty('lastName')
            expect(normalizedPartner.company).to.haveOwnProperty('name')
            expect(normalizedPartner.companyAddress).to.haveOwnProperty('line1')
            expect(normalizedPartner.companyAddress).to.haveOwnProperty('city')
            expect(normalizedPartner.mailAddress).to.haveOwnProperty('line1')
            expect(normalizedPartner.mailAddress).to.haveOwnProperty('city')
            expect(normalizedPartner.contactInfo).to.haveOwnProperty('officePhone')
            expect(normalizedPartner.contactInfo).to.haveOwnProperty('workEmail')
            done()
        })
        it('Should return an object with the values of properties set to corresponding NAF Link properties maintained from the values of properties in the sample', done => {
            expect(normalizedPartner.profile.firstName).to.equal(contactSample.properties.firstname.value)
            expect(normalizedPartner.profile.lastName).to.equal(contactSample.properties.lastname.value)
            expect(normalizedPartner.company.name).to.equal(contactSample.properties.company.value)
            expect(normalizedPartner.companyAddress.line1).to.equal(contactSample.properties.address.value)
            expect(normalizedPartner.companyAddress.city).to.equal(contactSample.properties.city.value)
            expect(normalizedPartner.mailAddress.line1).to.equal(contactSample.properties.mailing_street_address.value)
            expect(normalizedPartner.mailAddress.city).to.equal(contactSample.properties.mailing_city.value)
            expect(normalizedPartner.contactInfo.officePhone).to.equal(contactSample.properties.phone.value)
            expect(normalizedPartner.contactInfo.workEmail).to.equal(contactSample.properties.email.value)
            console.log(normalizedPartner)
            done()
        })
    })
})