import {useState, useEffect} from 'react';
import axios from 'axios';
import Book from './components/phonebook'
import Data from './components/data'

function App() {

  const [persons, setPersons] = useState([]
  );

  useEffect(
    () => {
      Data.getall()
          .then(data => setPersons(data));
    }, []
  )

  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  return (
    <div>
      <Book persons={persons} setPersons={setPersons} search={search} setSearch={setSearch} newName={name} setNewName={setName}
            newNumber={number} setNewNumber={setNumber}/>
    </div>
  )
}

export default App;
