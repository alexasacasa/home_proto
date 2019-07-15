
// (function() {
  const btn_menu = document.querySelector('.js-hamburguer');
  const menu = document.querySelector('.main-nav__items').children;
  const cont_menu = document.querySelector('.main-nav');

  function animationMenu() {
    btn_menu.classList.toggle('active');
    cont_menu.classList.toggle('show');
  }

  for(let e of menu ){
    e.addEventListener('click', () => {
      btn_menu.classList.remove('active');
      cont_menu.classList.remove('show');
    });
  }

  btn_menu.addEventListener("click", animationMenu);
// })();
