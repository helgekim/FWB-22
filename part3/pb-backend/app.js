/// inits

const express = require('express');
const app = express();
const cors = require('cors');

const morgan = require('morgan');

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

morgan.token('body', (req, res) => JSON.stringify(req.body));

/// middlewares


app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use(cors())
app.use(express.static('build'));

/// routes

app.get('/persons', (request, response) => {
  console.log(response);
  response.json(data);
})

app.get('/info', (request, response) => {
  const date = new Date();
  response.send(
    `<div>
      <p> Phonebook has ${data.length} entries </p>
      <p> ${date} </p>
    </div>`
  )
})

app.get('/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const object = data.filter(entry => entry.id === id)

  if (object.length >= 1) {
    response.json(object[0])
  } else {
    response.status(404).end();
  }

})

app.post('/persons', (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const matched = data.filter(entry => entry.name.match(body.name) || entry.number.match(body.number))

  if (matched.length > 0) {
    return response.status(400).json({
      error: "cannot have entries with the same name or number"
    })
  }

  const object = {
    id: generateId(),
    name: body.name,
    number: body.number,
    date: new Date()
  }

  data.push(object);

  return response.status(204).end();

})

app.delete('/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const newData = data.filter(entry => entry.id !== id);

  if (newData.length != data.length) {
    data = data.filter(entry => entry.id !== id);
    response.status(204).end();
  } else {
    response.status(404).end();
  }
})
