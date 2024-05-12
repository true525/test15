window.addEventListener('load', function() {
  const h1 = document.querySelector('h1');
  const h2Elements = document.querySelectorAll('h2');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 100) {
      h1.classList.add('fade-in');
    }

    h2Elements.forEach(function(h2) {
      const h2Position = h2.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (h2Position < windowHeight * 0.8) {
        h2.classList.add('fade-in');
      }
    });
  });
});
