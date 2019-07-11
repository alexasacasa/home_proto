// menu

(function() {
  
  document.documentElement.classList.add('js');

  const navElement = document.getElementById('main-nav');
  const navToggle = document.getElementById('main-nav-toggle');

  navToggle.addEventListener('click', () => {
    if (navElement.classList.contains('main-nav--expanded')) {
      navElement.classList.remove('main-nav--expanded');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      navElement.classList.add('main-nav--expanded');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });

})();



