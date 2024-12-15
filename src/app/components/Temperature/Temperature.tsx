import React, {useState, useEffect} from 'react';
import styles from './Temperature.module.css';

function Temperature() {
  let [forecast, setForecast] = useState<{ temperature?: string, shortForecast?: string, windDirection?: string, windSpeed?: string }>({})

  useEffect(() => {
    fetch("https://api.weather.gov/gridpoints/SEW/124,69/forecast/hourly")
    .then(response => response.json())
    .then(data => setForecast(data.properties.periods[0]))
  },[])

  return (
    <div className={styles.forecast}>
      <span className={styles.label}>Current conditions:</span>
      {forecast.temperature && <span className={styles.temperature}>{forecast.temperature}°F</span>}
      {forecast.shortForecast && <span className={styles.description}>{forecast.shortForecast}</span>}
    </div>
  );    
}

export default Temperature; 