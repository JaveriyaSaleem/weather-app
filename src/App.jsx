import React from 'react'
import { useRef, useState , useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import './index.css'
import City from './Components/City/City'
import Weather from './Components/Weather/Weather'
// import { inputRef } from './Components/Navbar/Input'
import { inputRef } from './Components/Navbar/Input.jsx';
import axios from 'axios';
import moment from 'moment'


const App = () => {
  const [data, setdata] = useState()

  
const apiKey = '0042bc4f7f30e066c405fba7b88a57fa'
const getCity = async(e)=>{
  e.preventDefault()
 const cityStore = inputRef.current.value || 'Karachi';
  console.log(inputRef.current.value)
try{
let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityStore}&appid=${apiKey}&units=metric`)
console.log(response)
setdata(response.data)
console.log("temperature: ", response.data.main.temp)
console.log("Feels Like: ", response.data.main.feels_like)
console.log("City Name: ", response.data.name)
console.log("Country: ",response.data.sys.country)
console.log("timezone: ",response.data.timezone)
console.log("Description: ",response.data.weather[0].description)
const utcTime = new Date().getTime()
const localTime = new Date(utcTime + response.data.timezone * 1000); 
      console.log("Local Time: ", localTime.moment().format('LTS')); 

      console.log("data", data)
}catch(e){
  console.log(e)
}
  
  inputRef.current.value = ""

}
const getData = async()=>{
 
 const cityStore = inputRef.current.value || 'karachi';
  console.log(inputRef.current.value)
try{
let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityStore}&appid=${apiKey}&units=metric`)
console.log(response)
setdata(response.data)
console.log("temperature: ", response.data.main.temp)
console.log("Feels Like: ", response.data.main.feels_like)
console.log("City Name: ", response.data.name)
console.log("Country: ",response.data.sys.country)
console.log("timezone: ",response.data.timezone)
console.log("Description: ",response.data.weather[0].description)
const utcTime = new Date().getTime()
const localTime = new Date(utcTime + response.data.timezone * 1000); 
      console.log("Local Time: ", localTime.toLocaleString()); 


      console.log("data", data)
}catch(e){
  console.log(e)
}
  
  inputRef.current.value = ""

}

useEffect(() => {
  console.log('hi')
  getData()
}, [])
  
  return (
    <div className='poppins dark-gradient'>
      <Navbar onClick={getCity}/>
      <div className='grid grid-cols-3 px-4'>
        <City cities={data.name}/>
        <Weather temp={data.main.temp+"°C"} feelsLike={data.main.feels_like+"°C"} humidity={data.main.humidity+"%"} pressure={data.main.pressure+"hPa"} wind={data.wind.deg} visibility={data.visibility}/>
      </div>
    </div>
  )
}

export default App
