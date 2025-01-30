const fs = require('fs'); // Import file system module (for Node.js)
const restaurent = [];

const images = [
  "First","second","third","fourth","fifth","sixth","seventh","Eighth","nine","tenth"
]

const restaurantNames = [
    "Spice Delight",
    "The Hungry Fork",
    "Ocean Breeze Diner",
    "Golden Spoon",
    "Taste Buds Cafe",
    "The Rustic Table",
    "Saffron Flavors",
    "Bistro Bliss",
    "The Cozy Nook",
    "Urban Eats",
    "Grill & Chill",
    "The Pasta Place",
    "Sizzle & Savor",
    "Flavors of India",
    "Mediterranean Feast",
    "Sushi Haven",
    "Firewood Pizza",
    "Tandoori Treats",
    "The Breakfast Club",
    "Fusion Bites"
  ];
  const foodTypes = [
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Thai",
    "American",
    "French",
    "Korean"
  ];
  const bangaloreLocations = [
    "MG Road",
    "Koramangala",
    "Indiranagar",
    "Whitefield",
    "Electronic City",
    "Jayanagar",
    "Hebbal",
    "Marathahalli",
    "Malleshwaram",
    "Banashankari"
  ];
  
  for(let i= 0;i<100;i++){
    const obj = {}
    obj.images = images[Math.floor(Math.random()*10)];
    obj.name = restaurantNames[Math.floor(Math.random()*20)];
    obj.rating = (Math.random()*5+1).toFixed(1);
    obj.foodTypes = foodTypes[Math.floor(Math.random()*10)];
    obj.priceForTwo = Math.floor(Math.random()*2400+100);
    obj.location = bangaloreLocations[Math.floor(Math.random()*10)];
    obj.Distance_from_Customer_house = (Math.random()*10+1).toFixed(1);
    obj.Offers = Math.floor(Math.random()*30);
    obj.Alchol = Math.random() > 0.7;
    obj.Restaurant_opening_time = Math.floor(Math.random()*24);
    obj.Restaurant_closing_time = (obj.Restaurant_opening_time+12)%24;
    restaurent.push(obj);
}

const jsonData = JSON.stringify(restaurent, null, 2);

fs.writeFileSync("arrayData.json", jsonData, "utf-8");

// console.log(restaurent.images);


// console.log(restaurent);
console.log("JSON file created successfully!");