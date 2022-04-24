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

function getDeleted(id) {
  return axios.delete(`${baseURL}/${id}`)
}

function update(id, object) {
  return axios.put(`${baseURL}/${id}`, object)
              .then(response => response.data)
}

export default {
  getall,
  getDeleted,
  create,
  update
}
