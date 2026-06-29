document.querySelector(".planner-btn").addEventListener("click", function () {

    const destination = document.getElementById("destination").value.trim();
const budget = Number(document.getElementById("budget").value);
const travellers = document.getElementById("travellers").value;
const travelType = document.getElementById("travel-type").value;

    let plan = "";

    if (destination.toLowerCase() === "dubai") {
        plan = `
<h3>🌍 Destination: Dubai</h3>

<h4>📅 Day 1</h4>
<ul>
<li>Check in to Burj Al Arab</li>
<li>Visit Dubai Mall</li>
<li>Watch Dubai Fountain Show</li>
</ul>

<h4>📅 Day 2</h4>
<ul>
<li>Burj Khalifa Observation Deck</li>
<li>Desert Safari</li>
<li>BBQ Dinner</li>
</ul>

<h4>📅 Day 3</h4>
<ul>
<li>Dubai Marina Cruise</li>
<li>Jumeirah Beach</li>
<li>Shopping at Mall of the Emirates</li>
</ul>`;
    }

    else if (destination.toLowerCase() === "paris") {
        plan = `
<h3>🌍 Destination: Paris</h3>

<h4>📅 Day 1</h4>
<ul>
<li>Eiffel Tower</li>
<li>Seine River Cruise</li>
</ul>

<h4>📅 Day 2</h4>
<ul>
<li>Louvre Museum</li>
<li>Notre-Dame Cathedral</li>
</ul>

<h4>📅 Day 3</h4>
<ul>
<li>Champs-Élysées</li>
<li>Arc de Triomphe</li>
<li>French Café Experience</li>
</ul>`;
    }

    else if (destination.toLowerCase() === "maldives") {
        plan = `
<h3>🌍 Destination: Maldives</h3>

<h4>📅 Day 1</h4>
<ul>
<li>Water Villa Check-in</li>
<li>Private Beach</li>
</ul>

<h4>📅 Day 2</h4>
<ul>
<li>Snorkeling</li>
<li>Dolphin Cruise</li>
</ul>

<h4>📅 Day 3</h4>
<ul>
<li>Spa Therapy</li>
<li>Sunset Dinner</li>
</ul>`;
    }

    else {
        plan = `<h3>Sorry!</h3>
        <p>We don't have an itinerary for <b>${destination}</b> yet.</p>`;
    }

    // Budget Type
    let budgetPlan = "";

    if (budget >= 100000) {
        budgetPlan = "💎 Luxury Trip";
    } else if (budget >= 50000) {
        budgetPlan = "🏨 Premium Trip";
    } else {
        budgetPlan = "💰 Budget Friendly Trip";
    }

    // Weather
    let weather = "";

    if (destination.toLowerCase() === "dubai")
        weather = "☀️ 38°C • Sunny";
    else if (destination.toLowerCase() === "paris")
        weather = "🌤️ 22°C • Pleasant";
    else if (destination.toLowerCase() === "maldives")
        weather = "🌴 30°C • Tropical";

    // Budget Breakdown
    const hotel = Math.round(budget * 0.45);
    const food = Math.round(budget * 0.20);
    const sightseeing = Math.round(budget * 0.20);
    const shopping = Math.round(budget * 0.15);

   document.getElementById("trip-result").innerHTML = `
${plan}

<hr>

<h3>${budgetPlan}</h3>

<p>${weather}</p>

<h3>💰 Estimated Budget</h3>

<ul>
    <li>🏨 Hotel : ₹${hotel}</li>
    <li>🍽️ Food : ₹${food}</li>
    <li>🎟️ Sightseeing : ₹${sightseeing}</li>
    <li>🛍️ Shopping : ₹${shopping}</li>
</ul>

<p><strong>👥 Travellers:</strong> ${travellers}</p>
<p><strong>🎒 Travel Type:</strong> ${travelType}</p>
`;

});