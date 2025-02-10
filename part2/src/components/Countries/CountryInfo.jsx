const CountryInfo = ({ data }) => {

  const { 
    area,
    capital,
    flags,
    languages,
    name,
  } = data;
  
  return (
    <div>
      <h1>{name.official}</h1>
      <p>Capital - {capital[0]}</p>
      <p>Area - {area}</p>
      
      <h3>Languages:</h3>
      <ul>
        {Object.values(languages).map(language => <li key={language}>{language}</li>)}
      </ul>

      <img 
        alt={flags.alt}
        src={flags.svg}
      />
    </div>
  )
}

export default CountryInfo;