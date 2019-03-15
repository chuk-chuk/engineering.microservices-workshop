const expect = require('chai').expect;
const request = require('superagent');

const { waitForAppToBecomeAvailable } = require('./waitForAppToBecomeAvailable');

before(async () => {
    await waitForAppToBecomeAvailable();
});

describe('The application',  () => {
    const endpoint = (process.env.TEST_ENDPOINT || 'http://localhost:3000');
    it('will return Pong when pinged',  (done) => {
      request.get(endpoint + '/ping')
        .end((err, response) => {
            expect(err).to.be.null;
            expect(response.status).to.equal(200);
            const result = response.text;
            expect("Pong").to.equal(result); 
            done();
        });
    });
});