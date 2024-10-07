const navList = document.getElementById('navList');
const message = document.getElementById('message');

navList.addEventListener('click', function(event) {
  event.preventDefault();
  const target = event.target;

  if (target.tagName === 'A') {
    const linkText = target.getAttribute('data-link');
    message.textContent = `You clicked on ${linkText}`;
    message.style.display = 'block';

    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
  }
});
