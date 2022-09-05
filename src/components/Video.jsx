import React, { useEffect, useState } from 'react';
import FewClouds from '../assets/fewClouds.mp4';
import ClearSky from '../assets/clearSky.mp4'
import axios from 'axios';

const video = () => {

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
    // NO pude acabar los backgrounds para cada clima ni la peticion por hooks por si ve este comentario profe no habia luz en mi zona el fin de semana por un error de la compañia :´( 

    const videos = { 
        fewclouds: FewClouds,
        clearsky: ClearSky,
        
    }

    return (
        <div className='video'>
            <video autoPlay muted loop >
                <source src={videos.fewclouds} type='video/mp4'/>
            </video>
        </div>
    );
};

export default video;