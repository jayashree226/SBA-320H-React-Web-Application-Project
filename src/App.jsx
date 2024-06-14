import React, { useState } from 'react';
import { getWeather } from './services/weather-api';
import WeatherCard from './components/weatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await getWeather(city);
      setWeather(data);
      setError('');
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search">
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city name" 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;