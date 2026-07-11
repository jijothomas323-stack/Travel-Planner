const destinations = {

    dubai: {

        name: "Dubai",

        weather: {
            temp: "32°C",
            condition: "Sunny",
            humidity: "62%",
            wind: "12 km/h"
        },

        currency: {
            code: "AED",
            rate: "1 AED = ₹23"
        },

        flights: [
            {
                airline: "Emirates",
                route: "DEL → DXB",
                price: "₹24,800",
                booking: "https://www.emirates.com"
            },
            {
                airline: "Air India",
                route: "DEL → DXB",
                price: "₹19,900",
                booking: "https://www.airindia.com"
            }
        ],

        hotels: [
            {
                name: "Atlantis The Palm",
                price: "₹32,000 / night",
                rating: "★★★★★"
            },
            {
                name: "Rove Downtown",
                price: "₹8,500 / night",
                rating: "★★★★☆"
            }
        ],

        restaurants: [
            {
                name: "Al Mallah",
                cuisine: "Arabic",
                price: "₹1200 for 2"
            },
            {
                name: "Ravi Restaurant",
                cuisine: "Pakistani",
                price: "₹900 for 2"
            }
        ],

        attractions: [
            "Burj Khalifa",
            "Dubai Mall",
            "Museum of the Future",
            "Palm Jumeirah"
        ]

    }

};