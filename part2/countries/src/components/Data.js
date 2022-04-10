import axios from 'axios';

function get() {
  return axios.get('https://restcountries.com/v3.1/all')
}

export default {
  get: get()
}
