export function flightCard(name, route, time, price, link){

return `
<div class="flight-card">

    <div>

        <h3>${name}</h3>

        <p>${route}</p>

        <small>${time}</small>

    </div>

    <div class="price">

        ${price}

    </div>

    <a href="${link}" target="_blank" class="book-btn">

        Book

    </a>

</div>
`;

}