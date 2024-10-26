// processData.js
function analyzeWeather(data) {
    return data.map(({ city, data }) => ({
        city,
        main: data.weather[0].main,
        temp: kelvinToCelsius(data.main.temp).toFixed(2),
        feels_like: kelvinToCelsius(data.main.feels_like).toFixed(2),
        timestamp: new Date(data.dt * 1000),
        min_temp:kelvinToCelsius(data.main.temp_min),
        max_temp:kelvinToCelsius(data.main.temp_max)
    }));
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15; // Convert Kelvin to Celsius
}

module.exports = { analyzeWeather, kelvinToCelsius };
