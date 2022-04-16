function Country(data) {

  const countries = data.data;

  if (countries.length > 1 && countries.length < 11)  {
    return (
      <div>
      <h2> Countries starting with these letters </h2>
      <ul>
        <CountryList countries={countries}/>
        </ul>
      </div>
    )
  }

  else if (countries.length == 1) {
    return (
      <div>
        <h2> Country </h2>
        <CountryFile countries = {countries} />
      </div>
    )
  }

}



function CountryList({countries}) {
  console.log('countrylist', countries)
  return countries.map(country => <li key={country.cc2}>{country.name.common}</li>)
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
