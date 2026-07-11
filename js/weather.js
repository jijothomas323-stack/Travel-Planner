const weather = destinationData.weather;

document.getElementById("weather").innerHTML = `
<div class="dashboard-card weather-card">

    <h2>🌤 Current Weather</h2>

    <div class="weather-temp">
        ${weather.temperature}
    </div>

    <div class="weather-condition">
        ${weather.condition}
    </div>

    <div class="weather-details">

        <div>
            💧
            <span>${weather.humidity}</span>
            <small>Humidity</small>
        </div>

        <div>
            🌬
            <span>${weather.wind}</span>
            <small>Wind</small>
        </div>

    </div>

</div>
`;