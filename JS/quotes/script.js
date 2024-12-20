const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "The best way to predict the future is to create it. – Peter Drucker",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Dream big and dare to fail. – Norman Vaughan",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau"
  ];

  const colors = [
    "#7f00ff", // Vibrant Orange
    "#43cea2", // Bright Green
    "#ff4b1f", // Deep Blue
    "#8e2de2", // Hot Pink
    "#56ab2f", // Aqua
    "#fad0c4", // Purple
    "#36d1dc", // Tangerine
    "#ff512f", // Mint
    "#5733FF", // Indigo
    "#FFD133", // Golden Yellow
    "#33D1FF", // Sky Blue
    "#8C33FF", // Violet
    "#FF5733", // Coral
    "#33FF85", // Pastel Green
    "#5733A6", // Dark Purple
    "#FF3385", // Rose
    "#3385FF", // Cool Blue
    "#33FFC5", // Teal
    "#A6FF33", // Lime
    "#FF33C5"  // Magenta
  ];
  

  function changeColor(){
    const element = document.getElementById("body1");
    const index = Math.floor(Math.random()*quotes.length);
    element.style.backgroundColor =colors[index];
  }
  
  

function timm(){
const element = document.getElementById("quotes-text");
const index = Math.floor(Math.random()*quotes.length);
element.innerHTML = quotes[index];
}

setInterval(changeColor,3000);


setInterval(timm,3000);
  