const request = require('supertest');
const app = require('../app')



describe('Test Handlers', function () {
    test('Should return hello world', (done) => {
     
        request(app)
        .get('/')
        .expect(200)
        .expect('Hello , World : our first test!', done)
      
    });
   
    test('Should include hello', async() => {
        const response = await request(app).get("/");
        console.log(response.text)
        expect(response.text).toContain("Hello");  
        expect(response.statusCode).toBe(200);

    });
});

