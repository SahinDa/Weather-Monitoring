// server.js
const express = require('express');
const cors = require('cors');
const fetchWeatherData = require('./fetchWeather');
const { analyzeWeather } = require('./processData');
const checkAlerts = require('./alerts');
const { interval } = require('./config');

const app = express();
const port = 3000;

app.use(cors());

let weatherSummary = [];
let historicalData = {};
let alerts = [];

// Function to update weather data
async function updateWeatherData() {
    try {
        const rawData = await fetchWeatherData();
        const currentWeather = analyzeWeather(rawData);
        weatherSummary = currentWeather;

        // Update historical data
        currentWeather.forEach(({ city, temp, min_temp, max_temp }) => {
            if (!historicalData[city]) {
                historicalData[city] = {
                    minTemp: min_temp,
                    maxTemp: max_temp,
                    sumTemp: temp,
                    count: 1
                };
            } else {
                historicalData[city].minTemp = Math.min(historicalData[city].minTemp, min_temp);
                historicalData[city].maxTemp = Math.max(historicalData[city].maxTemp, max_temp);
                historicalData[city].sumTemp += temp;
                historicalData[city].count += 1;
            }
        });

        alerts = checkAlerts(weatherSummary);
    } catch (error) {
        console.error("Error updating weather data:", error);
    }
}

// Update data at set intervals (every 5 minutes)
setInterval(updateWeatherData, interval);
updateWeatherData(); // Call once immediately to fetch the first data

// API endpoint for daily weather summary
app.get('/api/summary', (req, res) => res.json(weatherSummary));

// API endpoint for historical weather trends
app.get('/api/historical', (req, res) => {
    try {
        const responseData = Object.entries(historicalData).map(([city, { minTemp, maxTemp, sumTemp, count }]) => ({
            city,
            minTemp: minTemp.toFixed(2),
            maxTemp:maxTemp.toFixed(2),
            avgTemp: (sumTemp / count).toFixed(2), // Calculate average
            conditions: weatherSummary.find(item => item.city === city)?.main || "Unknown",
            timestamp: new Date()
        }));

        res.json(responseData);
    } catch (error) {
        console.error("Error fetching historical data:", error);
        res.status(500).json({ error: "Error fetching historical data" });
    }
});

// API endpoint for weather alerts
app.get('/api/alerts', (req, res) => res.json(alerts));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
