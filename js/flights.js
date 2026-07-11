let html = `<div class="dashboard-card">
<h2>✈ Available Flights</h2>`;

destinationData.flights.forEach(flight=>{

html +=`

<div class="flight-card">

<h3>${flight.airline}</h3>

<p>${flight.route}</p>

<p>${flight.time}</p>

<div class="flight-price">

${flight.price}

</div>

<a class="book-btn"

href="${flight.link}"

target="_blank">

Book Now

</a>

</div>

`;

});

html+="</div>";

document.getElementById("flights").innerHTML=html;