document.addEventListener('keydown', function(event) {
    const keyDisplay = document.getElementById('keyDisplay');
    if (event.key === ' ') {
      keyDisplay.textContent = 'Space';
    } else {
      keyDisplay.textContent = event.key;
    }
  });
  