/* eslint-disable no-undef */
const router = require('express').Router()
const controller = require('./controllers/controller.js');

router.get('/photo-data', controller.getAllPhotoData);
router.post('/photo-data', controller.addPhotoData); 
router.put('/photo-data/:uuid', controller.votePhotoUp); 

module.exports = router;
