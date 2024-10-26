// app.js

async function fetchAndDisplay(endpoint, containerId, formatter) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
        }

        const data = await response.json();
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear previous content

        // Render each item in the fetched data
        data.forEach(item => {
            const element = document.createElement('div');
            element.className = 'cityWeather';
            element.innerHTML = formatter(item);
            container.appendChild(element);
        });
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        document.getElementById(containerId).innerHTML = `<p>Error loading data...</p>`;
    }
}

// Formatter for current weather data
function summaryFormatter({ city, main, temp, feels_like, timestamp }) {
    return `
        <h3>${city}</h3>
        <p>Condition: ${main}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Feels Like: ${feels_like}°C</p>
        <p>Time: ${new Date(timestamp).toLocaleDateString()} ${new Date(timestamp).toLocaleTimeString()}</p>
    `;
}

// Formatter for historical weather trends
function trendFormatter({ city, minTemp, maxTemp, avgTemp, timestamp, conditions }) {
    return `
        <h3>${city}</h3>
        <p>Min Temp: ${minTemp}°C</p>
        <p>Max Temp: ${maxTemp}°C</p>
        <p>Avg Temp: ${avgTemp}°C</p>
        <p>Condition: ${conditions}</p>
        <p>Time: ${new Date(timestamp).toLocaleDateString()} ${new Date(timestamp).toLocaleTimeString()}</p>
    `;
}

// Formatter for alerts
function alertFormatter({ city, alert }) {
    return `
        <h3>${city}</h3><p>${alert}</p>
    `;
}

// Function to update weather data on intervals
async function updateWeather() {
    await fetchAndDisplay('http://localhost:3000/api/summary', 'weatherSummary', summaryFormatter);
    await fetchAndDisplay('http://localhost:3000/api/historical', 'weatherTrends', trendFormatter);
    await fetchAndDisplay('http://localhost:3000/api/alerts', 'weatherAlerts', alertFormatter);
}

// Update data every 5 minutes (300000 ms)
setInterval(updateWeather, 300000);
updateWeather(); // Initial fetch
