// script.js

// Simulate changing data dynamically
function updateTelemetryData() {
    document.getElementById('altitude').textContent = 'Altitude: ' + Math.floor(Math.random() * 1000000) + ' km';
    document.getElementById('velocity').textContent = 'Velocity: ' + Math.floor(Math.random() * 50000) + ' km/h';
}

// Update telemetry data every 5 seconds
setInterval(updateTelemetryData, 5000);
// Modify the script.js file to include dynamic mission data fetching

// Function to fetch mission data from an API
async function fetchMissionData() {
    try {
        const response = await fetch('https://api.example.com/mission');
        const missionData = await response.json();

        // Update mission information on the dashboard
        document.getElementById('mission-status').textContent = 'Status: ' + missionData.status;
        document.getElementById('mission-details').textContent = 'Details: ' + missionData.details;
    } catch (error) {
        console.error('Error fetching mission data:', error);
    }
}

// Call fetchMissionData on page load to get initial mission data
fetchMissionData();

// Update mission data every 10 seconds
setInterval(fetchMissionData, 10000);
// Modify the script.js file to include dynamic event data fetching

// Function to fetch recent mission events from an API
async function fetchMissionEvents() {
    try {
        const response = await fetch('https://api.example.com/events');
        const eventsData = await response.json();

        // Update events list on the dashboard
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = ''; // Clear existing list

        eventsData.forEach(event => {
            const listItem = document.createElement('li');
            listItem.textContent = `${event.timestamp}: ${event.description}`;
            eventsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching mission events:', error);
    }
}

// Call fetchMissionEvents on page load to get initial events data
fetchMissionEvents();

// Update events data every 15 seconds
setInterval(fetchMissionEvents, 15000);
// Modify the script.js file to include dynamic weather data fetching

// Function to fetch real-time weather data from an API
async function fetchWeatherData() {
    try {
        const response = await fetch('https://api.example.com/weather');
        const weatherData = await response.json();

        // Update weather information on the dashboard
        document.getElementById('temperature').textContent = `Temperature: ${weatherData.temperature}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${weatherData.humidity}%`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call fetchWeatherData on page load to get initial weather data
fetchWeatherData();

// Update weather data every 20 seconds
setInterval(fetchWeatherData, 20000);
// Modify the script.js file to include dynamic countdown timer

// Function to update the countdown timer
function updateCountdownTimer() {
    const countdownElement = document.getElementById('countdown-timer');
    const currentDate = new Date();
    const missionDate = new Date('2023-12-01T12:00:00Z'); // Set the mission date and time

    const timeDifference = missionDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    countdownElement.textContent = `Countdown: ${countdownString}`;
}

// Call updateCountdownTimer every second
setInterval(updateCountdownTimer, 1000);
