const highlightableParagraphs = document.querySelectorAll('.highlightable');

for (let i = 0; i < highlightableParagraphs.length; i++) {
  highlightableParagraphs[i].addEventListener('mouseover', function() {
    highlightableParagraphs[i].classList.add('highlighted');
  });

  highlightableParagraphs[i].addEventListener('mouseout', function() {
    highlightableParagraphs[i].classList.remove('highlighted');
  });
}
