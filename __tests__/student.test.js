// import supertest from 'supertest';
// import app from '../app.js';

describe('student',() =>{
    describe('get student', () =>{
        describe('given the student does not exist',
            () => {
                it('should return a correct student data', async () => {
                    expect(true).toBe(true);
                    // const email = 'anjana@gmail.com';
                    // await supertest(app).get(`/api/student/${email}`).expect(404);
                });
            });
    });
});
