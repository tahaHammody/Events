const characters = document.querySelectorAll('.character');
let positions = [0, 1, 2];

function updateCarousel() {
  characters.forEach((character, index) => {
    const pos = positions[index];
    character.style.transform = `translateX(${(pos - 1) * 180}px) scale(${pos === 1 ? 1.2 : 1})`;
    character.style.zIndex = pos === 1 ? '2' : '1';

    if (pos === 1) {
      character.classList.add('character-center');
    } else {
      character.classList.remove('character-center');
    }
  });
}

characters.forEach((character, index) => {
  character.addEventListener('click', () => {
    if (positions[index] === 1) return;

    let rotationCount = positions[index] === 0 ? 2 : 1;
    while (rotationCount--) {
      positions.push(positions.shift());
    }
    updateCarousel();
  });
});

updateCarousel();
