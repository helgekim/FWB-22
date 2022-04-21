import {useState, useEffect} from 'react';
import axios from 'axios';
import Data from './components/Data';
import Country from './components/Country'
import Weather from './components/Weather'


function Search({value, typer}) {
  return(
    <input onChange={(event) => typer(event.target.value)} value={value}/>
  )
}


function App() {

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState([]);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(
    () => {
          Data.get().then(
            response => setCountries(response.data)
          )
    }, []
  )

  useEffect(() => {setShowCountries(
    countries.filter(
      country => {
        if (search.length >= 2) {
          return country.name.common.match(search);
        } else {
          return [];
        }
      }
    )
  )}, [search])

  useEffect(() => {
    if (city.length >= 3) {
      Data.getWeather(city).then(response => setWeather(response));
    } else {
      setWeather({});
    }
  }, [city])

  return (
    <div>
      <div>
      <h1> Find a country </h1>
      <Search value={search} typer={setSearch}/>
      <Country data={showCountries} search={setSearch} citySetter={setCity}/>
      <Weather city={city} weather={weather}/>
      </div>
    </div>
  )
}

export default App;
