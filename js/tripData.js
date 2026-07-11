// Get user trip details from localStorage
const tripData = JSON.parse(localStorage.getItem("tripData"));

if (!tripData) {
    alert("No trip found!");
    window.location.href = "index.html";
}

// Get selected destination
const destinationKey = tripData.destination.toLowerCase();

// Fetch destination data from travelData.js
const destinationData = travelData[destinationKey];

if (!destinationData) {
    alert("Destination data not found!");
    window.location.href = "index.html";
}