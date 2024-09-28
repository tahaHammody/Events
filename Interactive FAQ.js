const faqItems = document.querySelectorAll('.faq-item');

for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener('click', function() {
    faqItems[i].classList.toggle('active');
  });
}
