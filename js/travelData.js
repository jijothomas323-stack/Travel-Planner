console.log("NEW travelData.js loaded");
const travelData = {

    dubai: {

    weather: {
        temperature: "32°C",
        condition: "Sunny",
        humidity: "62%",
        wind: "12 km/h"
    },

    flights: [

        {
            airline: "IndiGo",
            route: "DEL → DXB",
            time: "08:45 AM • Non-stop",
            price: "₹18,500",
            link: "https://www.goindigo.in"
        },

        {
            airline: "Air India",
            route: "DEL → DXB",
            time: "11:10 AM • Non-stop",
            price: "₹19,900",
            link: "https://www.airindia.com"
        },

        {
            airline: "Emirates",
            route: "DEL → DXB",
            time: "02:15 PM • Non-stop",
            price: "₹24,800",
            link: "https://www.emirates.com"
        }

    ],

    hotels: [

        {
            name: "Burj Al Arab",
            image: "images/hotel-dubai.jpg.jpeg",
            rating: "⭐⭐⭐⭐⭐",
            location: "Dubai, UAE",
            price: "₹32,999"
        },

        {
            name: "Atlantis The Palm",
            image: "images/hotel-dubai.jpg.jpeg",
            rating: "⭐⭐⭐⭐⭐",
            location: "Palm Jumeirah",
            price: "₹27,999"
        },

        {
            name: "Address Downtown",
            image: "images/hotel-dubai.jpg.jpeg",
            rating: "⭐⭐⭐⭐⭐",
            location: "Downtown Dubai",
            price: "₹22,499"
        }

    ],

    restaurants: [

        {
            name: "Al Mallah",
            image: "images/restaurant-dubai.jpg.jpeg",
            cuisine: "Arabic • Lebanese",
            rating: "⭐⭐⭐⭐⭐ (4.7)",
            price: "₹1,200 for 2"
        },

        {
            name: "Ravi Restaurant",
            image: "images/restaurant-dubai.jpg.jpeg",
            cuisine: "Pakistani Cuisine",
            rating: "⭐⭐⭐⭐ (4.5)",
            price: "₹900 for 2"
        },

        {
            name: "Pierchic",
            image: "images/restaurant-dubai.jpg.jpeg",
            cuisine: "Seafood",
            rating: "⭐⭐⭐⭐⭐ (4.8)",
            price: "₹4,500 for 2"
        }

    ]

},

    paris: {

        weather: {},

        flights: [],

        hotels: [],

        restaurants: []

    },

    maldives: {

        weather: {},

        flights: [],

        hotels: [],

        restaurants: []

    }

};
console.log(travelData);