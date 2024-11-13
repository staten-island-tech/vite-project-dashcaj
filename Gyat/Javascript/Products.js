/* versatile, control, power, aerial, agile, boxy */

const Cars = [
    {
        name: "Octane",
        description: "A balanced car that excels in all aspects of gameplay.",
        rarity: "Rare",
        image: "https://preview.redd.it/if-rocket-league-added-a-golden-octane-to-the-item-shop-v0-2s2und3wiv591.png?auto=webp&s=79bcb7d2b57b48ea6ea36f77f9c039a1b18e9cfc"
    },
    {
        name: "Dominus",
        description: "Known for its flat shape, ideal for powerful flicks.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ANUQNihHB5IMCE6eKdlox2jQ0NfLJ46m4w&s"
    },
    {
        name: "Breakout",
        description: "Perfect for dribbling and precise shots.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBchvbSjbsk7ruAJVcGcs5JESkoUnPa9OEGg&s"
    },
    {
        name: "Fennec",
        description: "Boxy shape for great control, favored by many pro players.",
        rarity: "Import",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm00UWLwiWFjEHgxJEwkbXssuP6YeRWbb92A&s"
    }, 
    {
        name: "Mantis",
        description: "Sleek design allows for agile aerial plays.",
        rarity: "Import",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTstAmE_wnOLzCzV4oXVIACTCnhYyTgyhN5A&s"
    },
    {
        name: "Batmobile",
        description: "The iconic DC car with a unique hitbox and style.",
        rarity: "Limited",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIOrcYQoYnhDDjmcw9JuMKWkOstQB0eq6Rg&s"
    },
    {
        name: "Endo",
        description: "Stylish and low-profile, great for air maneuvers.",
        rarity: "Import",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYzGo2Nnnz5EqUysNXL3WLq20OrxxB1qKUQ&s"
    },
    {
        name: "Takumi",
        description: "A compact car that excels in dribbling.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OVOf5VMozkJhC0XltUuJjWOprQiW95GYSA&s"
    },
    {
        name: "Jäger 619",
        description: "German sports car with excellent handling.",
        rarity: "Import",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpQGpOcJxQQX6wnfKUsTHEe6nzPyaWzJUQA&s"
    },
    {
        name: "Zippy",
        description: "A small car that's surprisingly effective in gameplay.",
        rarity: "Very Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROG8IfYJDflVP6wRzZfF6uJK6LzFovDVJmPg&s"
    },
    {
        name: "Merc",
        description: "Bulky and physical, great for challenging opponents.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iSdE1V_tkyyOuK9dvVaXHP8UFsa0Dzo_OQ&s"
    },
    {
        name: "Road Hog",
        description: "A truck-like vehicle that dominates the field.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyZDXB9Uk9GdVwtiYTRc_1x-vNcsY8lasFQ&s"
    },
    {
        name: "Venom",
        description: "Offers good control and unique maneuverability.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINYeRoHmgGscfGi3GgvyNBTuDoQdMC7NdOQ&s"
    },
    {
        name: "Sweet Tooth",
        description: "Ice cream truck.",
        rarity: "Import",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6okXehktyh8FHydXBGHD4C-7_VbMoA2O2A&s"
    },
    {
        name: "Nighthawk",
        description: "A sleek car designed for speed and stealthy plays.",
        rarity: "Limited",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKnCbw6JMmhEGOYvFt2PJJ65ndcntfjirig&s"
    },
    {
        name: "Vulcan",
        description: "Sports car designed for agile movements on the field.",
        rarity: "Import",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUAQZ65bq1mbwjOb8S7KlCRN46sG_7HbeuQ&s"
    },
    {
        name: "Ripper",
        description: "Low-slung design, known for its agility.",
        rarity: "Very Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIdjBYh-Jpz3I-iUTELzu5HleeDxvrIseiw&s"
    },
    {
        name: "Grog",
        description: "Rounded shape excels in close ball control.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8ufnjXB8vv11qNTzPubeQJ_7qBEKF8MPFw&s"
    },
    {
        name: "Aston Martin DB5",
        description: "Classic elegance.",
        rarity: "Limited",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7JFvT5Y1A0xN1KbAucu-RE0MO3aaO2x6cA&s"
    },
    {
        name: "Psyonix",
        description: "The car representing the developers, featuring a distinct design.",
        rarity: "Limited",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9Do3zS7VeklHz5aNVMxv3UmtEwWEKD38vQ&s"
    }
]





export { Cars };





