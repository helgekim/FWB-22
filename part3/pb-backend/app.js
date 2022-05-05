/// inits

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const Contact = require('./models/Contact');

const PORT = process.env.PORT || 3001;
app.listen(PORT);

let data = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]


/// functions

function generateId() {
  const maxId = data.length > 0
    ? Math.max(...data.map(n => n.id))
    : 0
  return maxId + 1
}


function errorHandler(error, request, response, next) {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

morgan.token('body', (req, res) => JSON.stringify(req.body));

/// middlewares


app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors())
app.use(express.static('build'));
app.use(errorHandler);

/// routes

app.get('/persons', (request, response) => {
  Contact.find({
  }).then(
    result =>
    {
      response.json(result);
    }
  )
})

app.get('/persons/:id', (request, response) => {
    Contact.findById(request.params.id).
    then(contact => {
    if (contact) {response.json(contact)}
    else {
      response.status(404).end();
    }
  }).catch(
    error => next(error)
  );
})

app.post('/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number || body.name === "" || body.number === "") {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  let matched;

   Contact.exists(
    {
      name: body.name
    }
  ).then(
    contact => matched = contact
  )

  if (matched) {
    return response.status(400).json({
      error: "cannot have entries with the same name or number"
    })
  }

  const object = new Contact(
    {
    name: body.name,
    number: body.number,
    date: new Date()
    }
  )

  object.save().then(
    status => {
      console.log(status)
      response.status(204).end()
    }
  )

})



app.delete('/persons/:id', (request, response) => {
  Contact.findByIdAndRemove(request.params.id).then(
    result => response.status(204).end()
  ).catch(
    error => next(error)
  )
})

app.put('/persons/:id', (request, response, next) => {
  const body = request.body

  const contact = {
    name: body.name,
    number: body.number,
    date: new Date()
  }

  Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
    .then(updatedContact => {
      response.json(updatedContact)
    })
    .catch(error => next(error))
})
