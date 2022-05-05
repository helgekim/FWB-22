require('dotenv').config();

const database = require('mongoose');

const scheme = new database.Schema(
  {
    'name': String,
    'number': String,
    'date': Date
  }
);

scheme.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const baseURL = process.env.DATA_URL;

database.connect(baseURL).then(
  connection => console.log("Database connected")
).catch(
  error => console.log("Couldnt't reach the database")
);

module.exports = new database.model('Contact', scheme);
