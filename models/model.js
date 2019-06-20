/* eslint-disable no-undef */
const mongoose = require('../db.js');

const eventsSchema = mongoose.Schema({
      uuid: { 
        type : String, 
        default: 'test'},
      email: { 
        type : String, 
        default: 'test'},
      imageUrl: {
        type : String, 
        default: 'test'},
      voteCount: {
        type : Number, 
        default: 9},
});

module.exports = mongoose.model('photo_metadata', eventsSchema);