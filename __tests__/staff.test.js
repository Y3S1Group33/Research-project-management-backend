// import supertest from 'supertest';
// import app from '../app.js';

describe('staff member all details',() =>{
    describe('get all staff member details', () =>{
        describe('given the all staff member details',
            () => {
                it('should return the all staff member details', async () => {
                    //expect(true).toBe(true);
                    await supertest(app).get(`api/staff/`).expect(404);
                });
            });
    });
});
