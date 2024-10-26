const axios = require('axios');
const { apiKey, cities } = require('./config');

async function fetchWeatherData() {
    try {
        return await Promise.all(cities.map(async (city) => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: { q: city, appid: apiKey }
            });
            return { city, data: response.data };
        }));
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return []; // Return an empty array in case of error
    }
}

module.exports = fetchWeatherData;
