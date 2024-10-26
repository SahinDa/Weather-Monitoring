# Weather Monitoring Dashboard

## Overview
The **Weather Monitoring Dashboard** is a real-time application that displays weather data for multiple cities, including current weather, historical trends, and alerts for high temperatures. The project consists of a front-end dashboard built with HTML, CSS, and JavaScript, and a back-end API built with Node.js and Express.

## Features
- Real-time weather data fetching
- Daily weather summary display
- Historical weather trends
- Weather alerts for extreme temperatures

## Technologies Used
- **Front-end**: HTML, CSS, JavaScript
- **Back-end**: Node.js, Express, Axios
- **API**: OpenWeather API for weather data
- **Environment Variables**: dotenv for configuration
## File Structure
```plaintext
/weather-monitoring-dashboard
├── backend
│   ├── .env                  # Environment variables (API key)
│   ├── alerts.js             # Contains alert checking logic
│   ├── config.js             # Configuration settings for the app
│   ├── fetchWeather.js       # Fetches weather data from OpenWeather API
│   ├── processData.js        # Processes weather data
│   └── server.js             # Express server setup and API routes
└── frontend
    ├── index.html            # Main HTML file for the dashboard
    ├── style.css             # Styles for the dashboard
    └── app.js                # JavaScript for fetching and displaying weather data
```
## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- A valid API key from OpenWeather. Set this in a `.env` file as specified in the Configuration section.

### Installation

## 1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-monitoring-dashboard
```
## 2.Navigate to the back-end directory and install dependencies:

```bash
cd backend
npm install
```
## 3.Create a .env file in the backend directory with the following content:
```bash
makefile
api_key=YOUR_OPENWEATHER_API_KEY
```
## 4. Navigate to the front-end directory and open index.html in a web browser or use a local server to serve the HTML file.

## Running the Back-end
## 1.In the backend directory, start the server:

```bash
node server.js
```
## 2.The server will run on http://localhost:3000.

## Running the Front-end
## 1.Open index.html in a web browser. Make sure the back-end server is running to fetch data.

## File Descriptions
- backend/.env: Contains sensitive environment variables, such as the OpenWeather API key.
- backend/alerts.js: Contains logic to check for weather alerts based on temperature thresholds.
- backend/config.js: Holds configuration settings such as API key, cities to monitor, and alert thresholds.
- backend/fetchWeather.js: Fetches weather data from the OpenWeather API for the specified cities.
- backend/processData.js: Processes the raw weather data and converts temperatures from Kelvin to Celsius.
- backend/server.js: Sets up the Express server, defines API routes for fetching weather summary, historical trends, and alerts.
- frontend/index.html: The main HTML file that structures the dashboard layout.
- frontend/style.css: Styles the dashboard for better presentation.
- frontend/app.js: JavaScript code that fetches weather data from the back-end and updates the dashboard.
