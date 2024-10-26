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
