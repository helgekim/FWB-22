import {useState} from 'react';
import Book from './components/phonebook'

function App() {

  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]
  );


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
