const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const endMessage = document.getElementById('end-message');

startButton.addEventListener('click', () => {
  let timeRemaining = 5 * 60; // 5 minutes in seconds
  endMessage.style.display = 'none'; // Hide the end message
  
  const interval = setInterval(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    // Display the timer
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Stop the timer at 0
    if (timeRemaining <= 0) {
      clearInterval(interval);
      timerDisplay.textContent = '00:00';
      endMessage.style.display = 'block'; // Show the end message
    }

    timeRemaining--;
  }, 1000);
});
