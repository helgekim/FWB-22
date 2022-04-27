/// inits

const express = require('express');
const app = express();

app.use(express.json());


const PORT = 3001;
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

/// routes

app.get('/persons', (request, response) => {
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
