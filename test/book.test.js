const mongoConnect = require('../mongoDB/database.js');
const request = require('supertest');
const app = require('../app.js');

describe('Testing Book API', () => {
    beforeAll(async ()=>{
        await mongoConnect();
    })

    describe('Test GET /books', () => {
      test('It should return with status 200', async ()=>{
        const result = await request(app).get('/books').expect(200);
      })
    })
    
})
