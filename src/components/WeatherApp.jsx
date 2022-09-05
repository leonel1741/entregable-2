import axios from 'axios';
import { useState, useEffect } from 'react';

const WeatherApp = () => {

    const [weather, setWeather] = useState({});
    useEffect(() => {
  
      navigator.geolocation.getCurrentPosition(success);
  
      function success(pos) {
        const crd = pos.coords;
  
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
  
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=e944b675d694e0daa53c1ec7a3c1e6d3`)
          .then(res => setWeather(res.data));
      }
  
    }, []);
    console.log(weather);
  
    const [isCelsius, setIsCelsius] = useState(true);
  
    const getCelsius = () => (setIsCelsius(!isCelsius));

    return (
        <div className='weather-card'>
            <h1>Weather App</h1>
            <p>{weather.name}, {weather.sys?.country}</p>
            <div className='card'>
                <div className='weather'>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`} alt="" />
                    <p>{weather.weather?.[0].description.toUpperCase()}</p>
                </div>
                <div className='dates'>
                    <p>Clouds: {weather.clouds?.all}%</p>
                    <p>Wind Speed: {weather.wind?.speed}m/s</p>
                    <p>Pressure: {weather.main?.pressure}hPa</p>
                </div>
            </div>
            <div className='degree'>
                <p>{isCelsius ? `${Math.round((weather.main?.temp) - 273)}°C` : `${Math.round((weather.main?.temp - 273.15) * 9 / 5 + 32)}°F`}</p>
            </div>
            <button onClick={getCelsius}>Degree {isCelsius ? "°F" : "°C"}</button>
        </div>
    );
};

export default WeatherApp;