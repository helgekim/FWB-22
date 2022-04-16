function Country(data) {

  const countries = data.data;
  console.log(countries);
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

  return(
    <div>
      <p>In development</p>
    </div>
  )
}



function CountryList({countries}) {
  console.log('countrylist', countries)
  return countries.map(country => <li key={country.cc2}>{country.name.common}</li>)
}


export default Country;
