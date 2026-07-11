const generateBtn = document.getElementById("generateTrip");

generateBtn.addEventListener("click", generateTrip);

function generateTrip() {

    const plannerResult = document.getElementById("plannerResult");
    const destination = document.getElementById("destination").value.trim();
const budget = document.getElementById("budget").value;
const duration = document.getElementById("duration").value;
const style = document.getElementById("style").value;
const prompt = document.getElementById("prompt").value.trim();
console.log(destination);

    if(destination.trim() === ""){
        alert("Please enter a destination.");
        return;
    }
    const tripData = {
    destination,
    budget,
    duration,
    style,
    prompt
};

localStorage.setItem("tripData", JSON.stringify(tripData));

    plannerResult.innerHTML = `
        <div class="loading">
            <h2>🤖 AI is planning your trip...</h2>
            <p>Please wait a few seconds.</p>
        </div>
    `;

    setTimeout(() => {

    window.location.href = "dashboard.html";

},2000);

}
function createTrip(destination,budget,duration,style,prompt){

let itinerary = "";
let flights = "";
let hotels = "";
let restaurants = "";
let estimatedCost = "";

switch(destination.toLowerCase()){

case "dubai":

flights = `
<div class="travel-card">
<h4>Emirates</h4>
<p>₹24,000</p>
<a href="https://www.emirates.com" target="_blank">Book Now</a>
</div>

<div class="travel-card">
<h4>IndiGo</h4>
<p>₹17,999</p>
<a href="https://www.goindigo.in" target="_blank">Book Now</a>
</div>
`;

hotels = `
<div class="travel-card">
<h4>Atlantis The Palm ⭐⭐⭐⭐⭐</h4>
<p>₹22,000 / Night</p>
<a href="https://www.atlantis.com/dubai" target="_blank">Book Hotel</a>
</div>

<div class="travel-card">
<h4>Rove Downtown ⭐⭐⭐⭐</h4>
<p>₹8,500 / Night</p>
<a href="https://www.rovehotels.com" target="_blank">Book Hotel</a>
</div>
`;

restaurants = `
<ul>
<li>🍽 Ossiano</li>
<li>🍽 Pierchic</li>
<li>🍽 Al Dawaar</li>
</ul>
`;

estimatedCost = "₹79,999";

itinerary=`

<h3>🗓 Day 1</h3>
<ul>
<li>✈ Arrive in Dubai</li>
<li>🏨 Hotel Check-in</li>
<li>🌆 Burj Khalifa</li>
<li>⛲ Dubai Fountain</li>
</ul>

<h3>🗓 Day 2</h3>
<ul>
<li>🏖 Jumeirah Beach</li>
<li>🛍 Dubai Mall</li>
<li>🐠 Aquarium</li>
</ul>

`;

break;

case "paris":

flights = `
<div class="travel-card">
<h4>Air France</h4>
<p>₹45,000</p>
<a href="https://wwws.airfrance.in" target="_blank">Book Now</a>
</div>
`;

hotels = `
<div class="travel-card">
<h4>Le Meurice ⭐⭐⭐⭐⭐</h4>
<p>₹30,000 / Night</p>
<a href="https://www.dorchestercollection.com/paris/le-meurice" target="_blank">Book Hotel</a>
</div>
`;

restaurants = `
<ul>
<li>🍽 Le Jules Verne</li>
<li>🍽 Epicure</li>
<li>🍽 Septime</li>
</ul>
`;

estimatedCost = "₹1,20,000";

itinerary=`

<h3>🗓 Day 1</h3>
<ul>
<li>🗼 Eiffel Tower</li>
<li>🚢 Seine Cruise</li>
</ul>

<h3>🗓 Day 2</h3>
<ul>
<li>🎨 Louvre Museum</li>
<li>☕ Paris Café</li>
</ul>

`;

break;

case "maldives":

flights = `
<div class="travel-card">
<h4>Maldivian Airlines</h4>
<p>₹22,000</p>
<a href="https://maldivian.aero" target="_blank">Book Now</a>
</div>
`;

hotels = `
<div class="travel-card">
<h4>Soneva Jani ⭐⭐⭐⭐⭐</h4>
<p>₹48,000 / Night</p>
<a href="https://soneva.com/resorts/soneva-jani" target="_blank">Book Hotel</a>
</div>
`;

restaurants = `
<ul>
<li>🍽 SEA Restaurant</li>
<li>🍽 Ithaa Undersea Restaurant</li>
</ul>
`;

estimatedCost = "₹1,60,000";

itinerary=`

<h3>🗓 Day 1</h3>
<ul>
<li>🏨 Water Villa</li>
<li>🏖 Beach Walk</li>
</ul>

<h3>🗓 Day 2</h3>
<ul>
<li>🤿 Snorkeling</li>
<li>🐬 Dolphin Cruise</li>
</ul>

`;

break;

default:

itinerary=`

<ul>

<li>✈ Arrival</li>

<li>🏨 Hotel</li>

<li>🍽 Local Food</li>

<li>📸 Sightseeing</li>

</ul>

`;

}

return `

<div class="trip-result">

    <h2>🌍 ${destination}</h2>

    <p><strong>💰 Budget:</strong> ${budget}</p>
    <p><strong>📅 Duration:</strong> ${duration}</p>
    <p><strong>🎒 Travel Style:</strong> ${style}</p>

    <hr>

    ${itinerary}

    <hr>

    <h3>🤖 AI Recommendation</h3>

    <p>${prompt}</p>

    <hr>

    <h3>✈ Recommended Flights</h3>

${flights}

<hr>

<h3>🏨 Recommended Hotels</h3>

${hotels}

<hr>

<h3>🍽 Recommended Restaurants</h3>

${restaurants}

<hr>

<h3>💰 Estimated Total Budget</h3>

<h2>${estimatedCost}</h2>

</div>

`;

}