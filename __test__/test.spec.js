const request = require('supertest');
const app = require('../index')


describe('Test Handlers', function () {
    test('Should return hello world', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .expect('Hello, World!', done)
    });
});