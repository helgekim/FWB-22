import axios from 'axios';

export default {
  get() {
    return axios.get("https://restcountries.com/v3.1/all/");
  }
}
