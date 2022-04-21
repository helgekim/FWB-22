import axios from 'axios';

function Weather({city, weather}) {

if (city.length > 0)  {
    console.log(weather);

    const temperature = weather.data.main.temp;
    const windspeed = weather.data.wind.speed
    return(
    <div>
      <h2> Weather in <i>{city}</i> </h2>
      <p>
      Temperature: {temperature}C
      </p>
      <p>
      Wind speed: {windspeed} m/s
      </p>
    </div>
  )
}

return (
  <div>
  </div>
);
}


export default Weather;
