import axios from 'axios';

const baseURL = 'http://localhost:3001/persons'

function getall() {
  return axios.get(`${baseURL}`)
         .then(
           response => response.data
         );
}

function create(object) {
  return axios.post(`${baseURL}`, object)
              .then(
                response => response.data
              )
}

export default {
  getall,
  create
}
