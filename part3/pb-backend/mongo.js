const database = require('mongoose');

if (process.argv.length < 3) {
  console.log('Password or login have not been provided: er1')
  process.exit(1);
}


// inits

const scheme = new database.Schema(
  {
    'name': String,
    'number': String,
    'date': Date
  }
);

const Contact = new database.model('Contact', scheme);

scheme.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// routes

const password = process.argv[2];
const baseURL = `mongodb+srv://helkeal:${password}@helgen.zgjsh.mongodb.net/telefonboka?retryWrites=true&w=majority`

database.connect(baseURL);

if (process.argv.length === 3) {
  Contact.find({
  }).then(
    result => {
      result.forEach((item) => {
        console.log(item);
    });
      database.connection.close()}
  )
} else if (process.argv.length === 5) {
  const newContact = new Contact(
    {
      name: process.argv[3],
      number: process.argv[4],
      date: new Date()
    }
  )
  newContact.save().then(
    result => database.connection.close()
  )
}
