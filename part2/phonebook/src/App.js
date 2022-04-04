import {useState} from 'react';


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  function addContact(event) {
    event.preventDefault();
    const object = {
      name: newName
    };
    return setPersons(persons.concat(object));
  }
  return (
    <div>
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      </div>
      <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(contact => <li>{contact.name}</li>)}
      </ul>
      </div>
    </div>
  )
}

export default App;
