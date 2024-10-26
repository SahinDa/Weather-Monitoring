// alerts.js
const { alertThresholds } = require('./config');

function checkAlerts(weatherData) {
    return weatherData.map(({ city, temp }) => {
        if (temp > alertThresholds.tempMax) {
            return { city, alert: `High temperature alert: ${temp}°C exceeds ${alertThresholds.tempMax}°C` };
        }
        return null;
    }).filter(alert => alert);
}

module.exports = checkAlerts;
