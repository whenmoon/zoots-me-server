/* eslint-disable no-console */
/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('../db');
const server = require('../app')
const { photoDataObject0, photoDataObject1, photoDataObject2, photoDataObject3, photoDataObject4, photoDataObject5 } = require('./mocks')

beforeAll(() => {
    mongoose.connection.collections['photo_metadatas'].drop(() => {
        console.log('Collectionz dropped :-)');
    });
});

describe('SERVER GET', () => {
    test('respond with status code 200 and return an array', async () => {
        const response = await request(server).get('/photo-data')
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toEqual(0);
    });
});

describe('SERVER POST', () => {
    test('respond with status code 200 and return an object', async () => {
        const response = await request(server).post('/photo-data')
        expect(response.statusCode).toBe(200);
        expect(typeof response.body).toBe('object')
    });
});

describe('SERVER / DB make POST request and compare GET request response with original data posted', () => {
    test('POST request responds with status code 200 and ', async () => {
        const response = await request(server)
            .post('/photo-data')
            .send(photoDataObject0)
            .set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
        const getResponse = await request(server).get('/photo-data');
        expect(getResponse.body.find(el => el.uuid === photoDataObject0.uuid).imageUrl).toEqual(photoDataObject0.imageUrl);
    });
});

describe('SERVER / DB PUT', () => {
    test('find difference between GET requests before and after PUT', async () => {
        const postRequest = await request(server)
            .post('/photo-data')
            .send(photoDataObject1)
            .set('Accept', 'application/json')
        expect(postRequest.statusCode).toBe(200);
        const getResponse = await request(server).get('/photo-data');
        const findPost = getResponse.body.find(el => el.uuid === photoDataObject1.uuid)
        const putRequest = await request(server)
            .put(`/photo-data/` + photoDataObject2.uuid)
            .set('Accept', 'application/json')
        expect(putRequest.statusCode).toBe(204);
        const getResponse2 = await request(server).get('/photo-data');
        const findPut = getResponse2.body.find(el => el.uuid === photoDataObject1.uuid)
        expect(findPost.voteCount === findPut.voteCount - 1)
    });
});

describe('SERVER / DB returns error for PUT request that doesn\'t conform to mongoose schema', () => {
    test('POST request responds with status code 500', async () => {
        const response = await request(server)
            .post('/photo-data')
            .send(photoDataObject3)
            .set('Accept', 'application/json')
        expect(response.statusCode).toBe(500);
    });
});

describe('SERVER / DB defualt values are written to database if values provided are undefined', () => {
    test('returns default schema values', async () => {
        const postRequest = await request(server)
            .post('/photo-data')
            .send(photoDataObject4)
            .set('Accept', 'application/json')
        expect(postRequest.statusCode).toBe(200);
        const getResponse = await request(server).get('/photo-data');
        expect(getResponse.body.find(el => el.uuid === 'test').voteCount).toEqual(photoDataObject5.voteCount)
    });
});

afterAll((done) => {
    mongoose.connection.close(() => {
        done();
    });
});
