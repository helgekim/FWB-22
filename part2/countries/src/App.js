import {useState, useEffect} from 'react';
import axios from 'axios';
function Search({value, typer}) {
  return(
    <input onChange={(event) => typer(event.target.value)} value={value}/>
  )
}


function App() {

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(
    () => {
      axios.get("http://restcountries.com/v3.1/all")
          .then(
            response => setCountries(response.data)
          )
    }, []
  )

  console.log(countries);

  console.log("Search request:", search);
  return (
    <div>
      <div>
      <h1> Find a country </h1>
      <Search value={search} typer={setSearch}/>
      </div>
    </div>
  )
}

export default App;
