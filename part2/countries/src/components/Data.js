import axios from 'axios';

export default {
  get() {
    return axios.get("https://restcountries.com/v3.1/all/");
  },
  getWeather(city) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d6eb6c0fc3e51262c519c59593d8af40
`)
  }
}
