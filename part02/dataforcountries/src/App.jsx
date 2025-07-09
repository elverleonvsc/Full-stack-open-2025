import { useState,useEffect } from 'react'
import api from './services/filterCountries'
import Filter from './filterData'



function App() {
  
  const [filter, setFilter] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [showCountry, setShowCountry] = useState([])
  const [city,setCity] = useState('')
  const [weather,setWheater] = useState([])

 useEffect(() => {

  api.Countries.get('/all')
    .then(response => {
      setAllCountries(response.data);
    });
}, []);

useEffect(()=> {
  if (city){
    api.GetCity(city).then(data => {
      setWheater(data)
    })
  }
},[city])

const handleFilter = (e) => {
  setFilter(e.target.value)
 
}
const handleClick = (i) => {
  setShowCountry(i.name.common)
  
  
  
  
}
  return (
    <>
    <div>
      find countries: <input onChange={handleFilter} />
    </div>
    <div>
      <Filter allCountries={allCountries} filter={filter} handleClick={handleClick} showCountry={showCountry} city={city} setCity={setCity} weather={weather}/>
    </div>
    </>
  )

  

      
}

export default App
