// config.js
require('dotenv').config();
const api_key=process.env.api_key;
module.exports = {
    apiKey: api_key, // Replace with your OpenWeather API key
    cities: ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'],
    interval: 5 * 60 * 1000, // Fetch interval in milliseconds (5 minutes)
    alertThresholds: {
        tempMax: 25// Alert if temperature exceeds 25°C
    }
};
