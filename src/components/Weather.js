import React, { useState } from 'react';
import axios from 'axios';
import './weather.css';

function Weather() {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const Change = (event) =>{
        setCity(event.target.value)
     }

     const fetchWeather = async() => {
        try{
            const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'f0456e5bda8b4793768b2d72daf44734'}`)
            console.log(response)
            setWeather(response)

           }
           catch(error){
            console.log("fetching error")

           }
     }
     const handleClick = (event) => {
        fetchWeather();
           
     }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter the city' value={city} onChange={Change} className='mt-5'/><br/>
        <button className='mt-4' onClick={handleClick}>Get Weather</button>
        {weather && (
            <>
            <div>
                <h3>{weather.data.name}</h3>
                <p>Temperature is : {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
            </div>
            </>
        )}
    </div>
  )
}
export default Weather;
