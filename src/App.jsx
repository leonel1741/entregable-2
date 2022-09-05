import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import WeatherApp from './components/WeatherApp';
import Video from './components/Video'

function App() {


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
    <div className="App">
      <Video />
      <WeatherApp />
    </div>
  )
}

export default App
