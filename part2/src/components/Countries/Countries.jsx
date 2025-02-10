import { useEffect, useState } from 'react';
import { getAllCountries, getSpecificCountryData } from '../../service/countriesAPI';
import CountriesList from './CountriesList';
import CountryInfo from './CountryInfo';

const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState(null);
  
  useEffect(() => {
    getAllCountries().then(response => setAllCountries(response.data))
  }, [])

  useEffect(() => {
    setVisibleCountries(allCountries.filter(
      country => country.name.common.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search, allCountries])

  useEffect(() => {
    if (visibleCountries.length === 1) {
      getSpecificCountryData({ countryName: visibleCountries[0].name.common}).then((response) => {
        setCountryInfo(response.data);
      })
    } else {
      setCountryInfo(null);
    }
  }, [visibleCountries.length])


  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      find countries <input value={search} onChange={handleSearchChange} />
      {countryInfo ? <CountryInfo data={countryInfo} /> : <CountriesList data={visibleCountries} />}
    </div>
  )
}

export default Countries;