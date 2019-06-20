const uuidv4 = require('uuid/v4');

const uuid = uuidv4()

const mocks = {
  photoDataObject0: {
    uuid: uuid,
    email: 'test@test.com',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crap-project-aecd5.appspot.com/o/01b4b3fd-95b7-4cf0-b855-03f324c4640f.jpg?alt=media&token=cb2023a2-44c1-45ce-a087-150',
    voteCount: 9
  },
  photoDataObject1: {
    uuid: uuid,
    email: 'test2@test.com',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crap-project-aecd5.appspot.com/o/01b4b3fd-95b7-4cf0-b855-03f324c4640f.jpg?alt=media&token=cb2023a2-44c1-45ce-a087-150d4467610d',
    voteCount: 10
  },
  photoDataObject2: {
    uuid: uuid,
    email: 'test2@test.com',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crap-project-aecd5.appspot.com/o/01b4b3fd-95b7-4cf0-b855-03f324c4640f.jpg?alt=media&token=cb2023a2-44c1-45ce-a087-150d4467610d',
    voteCount: 11
  },
  photoDataObject3: {
    uuid: uuid,
    email: 'test2@test.com',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crap-project-aecd5.appspot.com/o/01b4b3fd-95b7-4cf0-b855-03f324c4640f.jpg?alt=media&token=cb2023a2-44c1-45ce-a087-150d4467610d',
    voteCount: 'A'
  },
  photoDataObject4: {
    uuid: undefined,
    email: undefined,
    imageUrl: undefined,
    voteCount: undefined
  },
  photoDataObject5: {
    uuid: 'test',
    email: 'test',
    imageUrl: 'test',
    voteCount: 9
  }
}

module.exports = mocks;