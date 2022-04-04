import {useState} from 'react';


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  function addContact(event) {
    event.preventDefault();

    if (persons.filter(contact => contact.name == newName)) {
      return alert(`${newName} cannot be created for it's been already in the contactbook!`);
    }


    if (newName.length >= 3)

    {
      const object = {
      name: newName
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
        {persons.map(contact => <li key={contact.name}>{contact.name}</li>)}
      </ul>
      </div>
    </div>
  )
}

export default App;
