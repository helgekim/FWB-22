import Data from './data';

function Book({persons, setPersons, search, setSearch, newName, newNumber, setNewName, setNewNumber}) {


  const showAll = search === "" ? persons : persons.filter(element => element.name.match(search));

    function addContact(event) {
        event.preventDefault();

        const check = persons.filter(contact => contact.name === newName).length;
        const element = persons.filter(contact => contact.name === newName)[0]

        if (check > 0) {

          const object = {
            name: newName,
            number: newNumber
          }

          if (element.name == newName) {
            const consent = window.confirm("Wanna replace the contact")
            if (consent) {
              return Data.update(element.id, object)

            }
          } else if (element.number === object.number) {
            const consent = window.confirm("Wanna replace the contact?")
            if (consent) {
              return Data.update(element.id, object)
            }
          }
          
            return alert("This contact already exists!")


        }


        if (newName.length >= 3)

        {
          const object = {
          name: newName,
          number: newNumber
        };

        return Data.create(
          object
        ).then(
          data => setPersons(persons.concat(
            object
          ))
        )
      }
      else {
        return alert(`A contact named ${newName} cannot be created`);
    }
    }



  return(
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
        {showAll.map(contact => <li key={contact.name}>{contact.name}: {contact.number}</li>)}
      </ul>
    </div>
    </div>
  )

}
export default Book;
