import React from "react";
import CountryList from "./CountryList";
import Languages from "./Languages";
import { useState,useEffect } from 'react';
import axios from 'axios';

const Countries = ({ filteredCountry, newFilter }) => {

  const [selectedCountry, setSelectedCountry] = useState(null);

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      const apiKey = "c01685f10250d1c16f23112c6894a7e4"; // Replace with your OpenWeatherMap API key
      const capital = selectedCountry.capital;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`;
  
      axios
        .get(apiUrl)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.log("Error fetching weather data:", error);
        });
    }
  }, [selectedCountry]);
  


  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };
  let resultElements = "Search by name";

  if (filteredCountry.length > 10 && newFilter.length > 0) {
    resultElements = <div>Too many matches, use another filter</div>;
  } else if (filteredCountry.length <= 10 && filteredCountry.length > 1) {
    
    resultElements = (
        <>
        <CountryList
          filteredCountry={filteredCountry}
          handleCountryClick={handleCountryClick}
        />
        {selectedCountry && (
          <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Area: {selectedCountry.area}</p>
        <h3>Languages</h3>
        <Languages languages={Object.values(selectedCountry.languages)} />
        <img src={selectedCountry.flags.svg} alt={selectedCountry.name.common} />
          </div>
        )}

{weather && (
  <div>
    <h3>Weather in {selectedCountry.capital}</h3>
    <p>Temperature: {weather.main.temp}°C</p>
    <p>Description: {weather.weather[0].description}</p>
  </div>
)}

      </>
    )
  } else if (filteredCountry.length === 1) {
    const country = filteredCountry[0];
    
    resultElements = (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <Languages languages={Object.values(country.languages)} />
        <img src={country.flags.svg} alt={country.name.common} />
      </div>
    );
  } 

  return <div>{resultElements}</div>;
};

export default Countries;
