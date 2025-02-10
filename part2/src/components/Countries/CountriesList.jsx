const CountriesList = ({ data }) => {
  if (data.length > 10) {
    return <p>Too many matches, please specify another filter</p>
  }

  if (data.length === 0) {
    return <p>No countries</p>
  }

  return (
    <>
      {data.map(country => <p key={country.name.official}>{country.name.common}</p>)}
    </>
  )
}

export default CountriesList;