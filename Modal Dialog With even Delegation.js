const showModalBtn = document.getElementById('showModalBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

showModalBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay || event.target === closeBtn) {
    overlay.style.display = 'none';
  }
});
