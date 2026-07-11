const tripData = JSON.parse(localStorage.getItem("tripData"));

if (!tripData) {
    window.location.href = "index.html";
}

const destinationKey = tripData.destination.toLowerCase();

const destinationData = travelData[destinationKey];

if (!destinationData) {

    alert("Destination data not found.");

    window.location.href = "index.html";

}

document.getElementById("trip-overview").innerHTML = `
<div class="trip-card">

    <div class="trip-header">

        <div>
            <h1>🌍 ${tripData.destination}</h1>
            <p>Your AI-powered travel dashboard</p>
        </div>

        <span class="trip-badge">${tripData.style}</span>

    </div>

    <div class="trip-grid">

        <div class="trip-item">
            <h4>💰 Budget</h4>
            <p>${tripData.budget}</p>
        </div>

        <div class="trip-item">
            <h4>📅 Duration</h4>
            <p>${tripData.duration}</p>
        </div>

        <div class="trip-item">
            <h4>✈ Travel Style</h4>
            <p>${tripData.style}</p>
        </div>

        <div class="trip-item">
            <h4>🤖 AI Request</h4>
            <p>${tripData.prompt}</p>
        </div>

    </div>

</div>
`;