const mongoConnect = require('../mongoDB/database.js');
const request = require('supertest');
const app = require('../app.js');

describe('Testing Book API', () => {
    beforeAll(async () => {
        await mongoConnect();
    })

    describe('Test GET API', () => {
        test('It should return with status 200', async () => {
            const result = await request(app).get('/books').expect(200);
        });

        test('Fetching details of BookById , it should return with status 200', async () => {
            const result = await request(app).get('/books/65408bd958bc451ad20760d5').expect(200);
        });

        test('Fetching details of Book BY wrong Id. it should retrun with status 404', async () => {
            const result = await request(app).get('/books/65408bd958bc451ad20760e5').expect(404);
        });

        
    })

})
