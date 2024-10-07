document.addEventListener('scroll', function() {
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
      const rect = text.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        text.classList.add('active');
      } else {
        text.classList.remove('active');
      }
    });
  });
  