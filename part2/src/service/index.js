import axios from 'axios';

const ROOT_URL = 'http://localhost:3001/persons';

const getPersons = () => {
  return axios.get(ROOT_URL)
}

const createNewPerson = ({ name, number }) => {
  return axios.post(ROOT_URL, { name, number })
}

const changePersonImportance = ({ id, data }) => {
  return axios.put(`${ROOT_URL}/${id}`, data)
}

const changePersonPhoneNumber = ({ id, number }) => {
  return axios.patch(`${ROOT_URL}/${id}`, { number })
}

const deletePerson = (id) => {
  return axios.delete(`${ROOT_URL}/${id}`)
}

export {
  ROOT_URL,
  getPersons,
  createNewPerson,
  changePersonImportance,
  changePersonPhoneNumber,
  deletePerson
}