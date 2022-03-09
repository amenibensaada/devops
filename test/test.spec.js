const request = require('supertest');
const app = require('../app')


describe('Test Handlers', function () {
    test('Should return hello world', (done) => {
        const msg = 'Hello'
        request(app)
        .get('/')
        .expect(200)
        .expect('Hello, World : our first test!', done)
      
    });
});
