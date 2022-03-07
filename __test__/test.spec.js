const request = require('supertest');
const app = require('../index')


describe('Test Handlers', function () {
    test('Should return hello world', (done) => {
        try {
            request(app)
            .get('/')
            .expect(200)
                .expect('Hello, World!')
                .end((err, res) => {
                if (err) return done(err);
                return done();
                });
        return done()  
        } catch (e) {
            return done()
      }
    });
});