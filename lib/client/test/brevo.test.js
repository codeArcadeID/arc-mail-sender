const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const BrevoClient = require('../brevo');
const { faker } = require('@faker-js/faker');
const { createTransport } = require('nodemailer');

describe("BrevoClient", function () {
    const emptyFunc = () => { };

    const client = new BrevoClient({
        transporter: {
            sendMail: emptyFunc,
        },
    });

    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();

        process.env.SMTP_FROM = 'noreply@test.com';
        process.env.SMTP_HOST = 'smtp-relay.local';
        process.env.SMTP_PORT = 587;
        process.env.SMTP_USER = 'user-test';
        process.env.SMTP_KEY = 'this-is-key';
    });

    afterEach(() => {
        sandbox.restore();
        delete process.env.SMTP_FROM;
        delete process.env.SMTP_HOST;
        delete process.env.SMTP_PORT;
        delete process.env.SMTP_USER;
        delete process.env.SMTP_KEY;
    });

    const payload = {
        subject: faker.lorem.words(3),
        text: faker.lorem.paragraphs({min: 2, max: 5})
    };

    describe("send", function () {
        const recipient = faker.internet.email();

        payload.to = recipient;

        const stubRes = {
            envelope: {
                from: process.env.SMTP_FROM,
                to: recipient,
            },
            messageId: faker.lorem.words(1),
        }

        it("should send email to recipient", async function () {
            stubRes.accepted = [recipient];
            stubRes.rejected = [];

            const stub = sandbox.stub(client.transporter, "sendMail").resolves(stubRes);
            const result = await client.send(payload);
            console.log("res:: ", result)

            expect(stub.calledOnce).to.be.true;
            expect(result.messageId).to.be.exist;
            expect(result.accepted).to.be.an('array').length.to.be.gt(0);
            expect(result.accepted[0]).to.be.eql(recipient);
            expect(result.rejected).to.be.an( 'array').that.is.empty
            expect(result.envelope.to).to.eql(recipient);
            // expect(result.accepted).length.to.be.gt(0);
            // expect(user.name).to.equal(stubValue.name);
            // expect(user.email).to.equal(stubValue.email);
        });
    });
})