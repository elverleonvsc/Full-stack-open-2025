import { useEffect } from "react"
import api from './services/filterCountries'




const Filter = ( {allCountries,filter,handleClick,showCountry,setCity,weather}) =>{
  
const filterCountryName = (country,textCountry) => {
  return country.filter(c => c.name.common.toLowerCase().includes(textCountry.toLowerCase()))
}
const objCountries = filterCountryName(allCountries,filter)

useEffect(() => {
  if (objCountries.length === 1) {
    const capital = objCountries[0].capital[0];
    api.GetCity(capital).then(data => {
      setCity(data);
    });
    
   
  }
},  [objCountries.length, objCountries[0]?.capital?.[0], setCity]);

const objShowCountries = ()=> {
  if (showCountry){
    const selected = allCountries.find(c => c.name.common === showCountry )
    if(selected) {
return (
      <div>
      
        
          <h1>{selected.name.common}</h1>
          <p>Capital {selected.capital}</p>
          <p>Area {selected.area}</p>

         <div>
          <h2>Languages</h2>

          {Object.values(selected.languages).map((l,index) => (
            <li key={index}>{l}</li>
          ))}
         </div>
          
          <img src={selected.flags.png} alt={selected.flags.alt} />
        </div>
       

     
      )
    }
  }
   
}

  if(objCountries.length === 1) {
    return(
      <div>
        {objCountries.map(i => (
          <div key={i.cca3}> 
          <h1>{i.name.common}</h1>
          <p>Capital {i.capital}</p>
          <p>Area {i.area}</p>

         <div>
          <h2>Languages</h2>

          {Object.values(i.languages).map((l,index) => (
            <li key={index}>{l}</li>
          ))}
         </div>
          
          <img src={i.flags.png} alt={i.flags.alt} />
          
  {weather.main ? (
  <div>
    <p>🌡️ Temperatura: {weather.main.temp} °C</p>
    <p>💨 Viento: {weather.wind.speed} m/s</p>
  </div>
) : (
  <p>Cargando clima...</p>
)}

        </div>
        
        ))}
        
      </div>
    )
  }
  else if (filter && objCountries.length <= 10) {
    
return(

        <div>
          <ul>
      {objCountries.map(i => (
       
        <li key={i.cca3}> 
          {i.name.common} <button onClick={()=> handleClick(i)}> show</button>
          </li>
      ))}
     </ul>
      {objShowCountries()}
        </div>
       
) 
  } else{
    return(
 <div>
      <p>Too many matches, specify another filter</p>
      
    </div>
    
    )
   
    
  }
    
  
}
export default Filter