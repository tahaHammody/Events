const clickButton = document.getElementById('clickButton');

const counterDisplay = document.getElementById('counter');

let count = 0;

clickButton.addEventListener('click', function() {
  count++;

  counterDisplay.textContent = count;
});
