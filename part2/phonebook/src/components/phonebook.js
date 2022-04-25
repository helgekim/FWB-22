import Data from './data';

function Book({persons, setPersons, search, setSearch, newName, newNumber, setNewName, setNewNumber, setMessage}) {


  const showAll = search === "" ? persons : persons.filter(element => element.name.match(search));


    function deleteContact(id) {
      const consent = window.confirm(`Are you sure you wish to delete this contact?`);
      if (consent) {
        return Data.getDeleted(id)
                   .then(response =>
                   {
                     return setPersons(persons.filter(contact => contact.id !== id));
                   }).catch(
                     error =>
                     {
                       setMessage({
                         status: `Aborted. Deletion is impossible, the contact has probably been already deleted`,
                         statusID: 2
                       })
                       return setTimeout(
                         () => setMessage({}), 1000
                       )
                     }

                   )
      } else {
        setMessage(
          {
            status: `Deletion of the contact is cancelled.`,
            statusID: 1
          }
        )
        return setTimeout(
          () => {
            setMessage(
              {}
            )
          }, 1000
        )
      }
    }


    function addContact(event) {
        event.preventDefault();

        const check = persons.filter(contact => contact.name === newName).length;
        const element = persons.filter(contact => contact.name === newName)[0]

        if (check > 0) {

          const object = {
            name: newName,
            number: newNumber
          }

          if (element.name === newName) {
            const consent = window.confirm("Wanna replace the contact")
            if (consent) {
              Data.update(element.id, object).then(
                message => {
                  setMessage(
                    {
                      status: `Entry named ${newName} modified`,
                      statusID: 1
                    }
                  )
                  return setTimeout(
                    () => setMessage({}), 2000
                  )
                }
              )

            }
          } else if (element.number === object.number) {
            const consent = window.confirm("Wanna replace the contact?")
            if (consent) {
              Data.update(element.id, object).then(
              message => {setMessage(
                  {
                    status: `Entry named ${newName} modified`,
                    statusID: 1
                  }
                )
                return setTimeout(
                  () => setMessage({}), 2000
                )
              })
            }
          }

            setMessage(
              {
                status: `There is already an entry named ${newName}`,
                statusID: 2
              }
            )
            return setTimeout(
              () => setMessage({}), 2000
            )


        }


        if (newName.length >= 3)

        {
          const object = {
          name: newName,
          number: newNumber
        };

         Data.create(
          object
        ).then(
          data => setPersons(persons.concat(
            object
          ))
        )

        setMessage(
          {
            status: `Contact entry named ${newName} created`,
            statusID: 1
          }
        )

        return setTimeout(
          () => {
            setMessage({
            })
          }, 1000
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
        {showAll.map(contact => {
            return (
              <li key={contact.name}>{contact.name}: {contact.number} <button onClick={() => deleteContact(contact.id)}>Delete</button></li>
            )
        })}
      </ul>
    </div>
    </div>
  )

}
export default Book;
