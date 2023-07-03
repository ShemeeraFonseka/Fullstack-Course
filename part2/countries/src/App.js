import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Countries from './components/Countries';

function App() {

const [countries,setCountries]=useState([])
const [newFilter,setNewFilter]=useState('')

useEffect(()=>{
  const dataHook=()=>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then((response)=>{
      setCountries(response.data)
    })
    
  }
  dataHook();
},[])



const filterByName = (event) => {
  const filterValue = event.target.value.toLowerCase();
  setNewFilter(filterValue);
};

const filteredCountry = countries.filter((country) =>
country.name.common.toLowerCase().includes(newFilter)
  );


  return (
    <div>
      <Filter newFilter={newFilter} filterByName={filterByName} />
<Countries  filteredCountry={filteredCountry} newFilter={newFilter}/>

    </div>
  );
}

export default App;
