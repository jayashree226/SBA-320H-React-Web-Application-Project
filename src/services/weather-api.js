
import axios from 'axios';
const API_KEY = '134160676ba29c7ec7769acd18f203d6'; // weather API key
const Weather_URL = 'http://api.openweathermap.org/data/2.5/weather';

export  async function getWeather(city) {
  try {
    const response = await axios.get(Weather_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}