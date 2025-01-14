import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import City from './Components/City/City'
import Weather from './Components/Weather/Weather'
// import { inputRef } from './Components/Navbar/Input'

const App = () => {

  let inputRef = useRef()
  const apiKey = '0042bc4f7f30e066c405fba7b88a57fa'
const getCity = async()=>{
  let cityStore = inputRef.current.value
  console.log(inputRef.current.value)
try{
let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityStore}&appid=${apiKey}&units=metric`)
console.log(response)
console.log("temperature: ", response.data.main.temp)
console.log("Feels Like: ", response.data.main.feels_like)
console.log("City Name: ", response.data.name)
console.log("Country: ",response.data.sys.country)
console.log("timezone: ",response.data.timezone)
console.log("Description: ",response.data.weather[0].description)
const utcTime = new Date().getTime()
const localTime = new Date(utcTime + response.data.timezone * 1000); 
      console.log("Local Time: ", localTime.toLocaleString()); 

}catch(e){
  console.log(e)
}
  
  inputRef.current.value = ""
}
  
  return (
    <div className='poppins dark-gradient'>
      <Navbar/>
      <div className='grid grid-cols-3 px-4'>
        <City/>
        <Weather/>
      </div>
      <input type="text" ref={inputRef}/>
      <button onClick={getCity}>Search</button>

    </div>
  )
}

export default App
