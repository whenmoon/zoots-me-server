/* eslint-disable no-undef */
const photos = require('../models/model.js');

exports.getAllPhotoData = async (request, response) => {
  
  try {
    const result = await photos.find();
    response.status(200).send(result);
  } catch (e) {
    // console.log(e); // eslint-disable-line no-console
    response.status(500).send();
  } 
}

exports.addPhotoData = async (request, response) => {
  try {
    const result = await new photos(request.body).save();
    response.status(200).send(result);
  } catch (e) {
    // console.log(e); // eslint-disable-line no-console
    response.status(500).send();
  }
}

exports.votePhotoUp = async (request,response) => {
  try {
    await photos.findOneAndUpdate(
      { uuid: request.params.uuid },
      { $inc: { voteCount: 1 } },
    );
    response.status(204).send();
  } catch (e) {
    // console.log(e); // eslint-disable-line no-console
    response.status(500).send();
  }
 }