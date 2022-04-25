import {useState, useEffect} from 'react';
import axios from 'axios';
import Book from './components/phonebook'
import Data from './components/data';
import Message from './components/message';

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
  const [message, newMessage] = useState({});


  return (
    <div>
    <Message message={message}/>
      <Book persons={persons} setPersons={setPersons}
            search={search} setSearch={setSearch}
            newName={name} setNewName={setName}
            newNumber={number} setNewNumber={setNumber}
            setMessage = {newMessage}/>
    </div>
  )
}

export default App;
