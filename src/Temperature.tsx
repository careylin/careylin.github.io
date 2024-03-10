import React, {useState, useEffect} from 'react';

function Temperature() {
  let [forecast, setForecast] = useState<{ temperature?: string, shortForecast?: string, windDirection?: string, windSpeed?: string }>({})

  useEffect(() => {
    fetch("https://api.weather.gov/gridpoints/SEW/124,69/forecast/hourly")
    .then(response => response.json())
    .then(data => setForecast(data.properties.periods[0]))
  },[])

  return (
    <div className="forecast">
    <span>Current conditions:</span>
    {forecast.temperature && <span>{forecast.temperature}°F</span>}
    {forecast.shortForecast && <span>{forecast.shortForecast}</span> }
    </div>
  );    
}

export default Temperature;