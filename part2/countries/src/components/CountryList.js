const CountryList = ({ filteredCountry, handleCountryClick }) => {
    return (
      <ul>
        {filteredCountry.map((country) => (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleCountryClick(country)}>Show</button>
          </li>
        ))}
      </ul>
    );
  };
  
export default CountryList;
