const contextMenu = document.getElementById('contextMenu');
const viewDetails = document.getElementById('viewDetails');
const copyText = document.getElementById('copyText');

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  contextMenu.style.display = 'block';
  contextMenu.style.left = `${event.pageX}px`;
  contextMenu.style.top = `${event.pageY}px`;
});

document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

viewDetails.addEventListener('click', () => {
  alert('View Details selected');
});

copyText.addEventListener('click', () => {
  alert('Copy Text selected');
});
