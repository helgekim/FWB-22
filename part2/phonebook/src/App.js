import {useState} from 'react';


function App() {


  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [search, setSearch] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const showAll = search === "" ? persons : persons.filter(element => element.name.includes(search));


  function addContact(event) {
    event.preventDefault();

    /* doesnt work
    if (persons.filter(contact =>
      {      console.log(contact.name, newName)
        return contact.name == newName})
      ) {
      return alert(`${newName} cannot be created for it's been already in the contactbook!`);
    }*/


    if (newName.length >= 3)

    {
      const object = {
      name: newName,
      number: newNumber
    };
    return setPersons(persons.concat(object));
  }
  else {
    return alert(`A contact named ${newName} cannot be created`);
  }

  }
  return (
    <div>
    <div>
      <h2>Phonebook</h2>
      <p> filter shown with <input value={search} onChange={(event) => setSearch(event.target.value)}/></p>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      </div>
      <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(contact => <li key={contact.name}>{contact.name}: {contact.number}</li>)}
      </ul>
      </div>
    </div>
  )
}

export default App;
