import axios from "axios";

const restApi = 'https://studies.cs.helsinki.fi/restcountries/api/'
const api_key = import.meta.env.VITE_SOME_KEY

console.log("API key:", import.meta.env.VITE_SOME_KEY)

const Countries =  axios.create({
    baseURL: restApi,
    headers:{
        "Content-Type": 'application/json'
    }
})


const GetCity = (city) => {
const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`

console.log(url);


return axios.get(url)
.then(response => {
    
    const lat = (response.data[0].lat)
    const lon = (response.data[0].lon)
    
    return ApiCall(lat,lon)
})


}
 
const ApiCall = (lat,lon) => {
   console.log("Usando lat:", lat, "y lon:", lon) 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`

return axios.get(apiUrl)
.then(response => {
  
     console.log("Temperatura:", response.data.main.temp, "°C")
  console.log("Wind:", response.data.wind.speed, "m/s")
    return response.data
})

}


export default {Countries,GetCity,ApiCall}