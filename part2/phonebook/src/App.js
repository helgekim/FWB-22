import {useState, useEffect} from 'react';
import axios from 'axios';
import Book from './components/phonebook'

function App() {

  const [persons, setPersons] = useState([]
  );

  useEffect(
    () => {
      axios.get("http://localhost:3001/persons")
           .then(
             response => setPersons(response.data)
           );
    }, []
  )

  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  return (
    <div>
      <Book persons={persons} setPersons={setPersons} search={search} setSearch={setSearch} newName={name}
            newNumber={number} setNewNumber={setNumber}/>
    </div>
  )
}

export default App;
