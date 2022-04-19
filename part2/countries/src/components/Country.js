import Weather from './Weather';

function Country({data, search}) {

  if (data.length > 1 && data.length < 11)  {
    return (
      <div>
      <h2> Countries starting with these letters </h2>
      <ul>
        <CountryList countries={data} search={search}/>
        </ul>
      </div>
    )
  }

  else if (data.length == 1) {
    return (
      <div>
        <h2> Country </h2>
        <CountryFile countries = {data} />
        <Weather countries = {data}/>
      </div>
    )
  }

}



function CountryList({countries, search}) {
  console.log(search)
  const find = (name) => {
    return search(name);
  }
  return countries.map(country => <li key={country.cc2}>{country.name.common}
    <button onClick={event => find(country.name.common)}>Show</button></li>)
}


function CountryFile({countries}) {
  const country = countries[0]
  return (
    <div>
      <h3> {country.name.common} ({country.name.official}) </h3>
      <div>
        <h4> Main data </h4>
        <p> Capital: {country.capital.toString(" ,")} </p>
        <p> Area: {country.area}</p>
       </div>
       <div>
        <h4> Languages </h4>
        <ul>
          {
            Object.values(country.languages).map(
              language => <li>{language}</li>
            )
          }
        </ul>
       </div>
       <div>
        <img src={country.flags.png}/>
       </div>
    </div>
  )
}

export default Country;
