import axios from "axios";


const URL = 'https://studies.cs.helsinki.fi/restcountries/';

const getAllCountries = () => {
  return axios.get(`${URL}/api/all`)
}

const getSpecificCountryData = ({ countryName }) => {
  return axios.get(`${URL}/api/name/${countryName}`)
}


export {
  getAllCountries,
  getSpecificCountryData
}
