// Set the date for the Olympics countdown
const olympicsDate = new Date("July 14, 2028 00:00:00")

// Update the countdown every second
const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = olympicsDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display results
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "<h2>The Olympics has started!</h2>";
  }
}, 1000);
