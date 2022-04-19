import axios from 'axios';

function Weather({countries}) {

  const country = countries[0]
  const capital = country.capital.toString(" ,");
  return(
    <div>
      <h2> Weather in <i>{capital}</i> </h2>
      <p></p>
    </div>
  )
}


export default Weather;
