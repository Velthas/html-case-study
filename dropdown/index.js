const dropdown = (function () {
  const menuItems = document.querySelectorAll('.menuItem');
  menuItems.forEach((item) => {
    const menuHeader = item.querySelector('.parentItem');
    const submenu = item.querySelector('.sub-menu');

    menuHeader.addEventListener('mouseenter', function () {
      submenu.classList.add('visible');
    });

    menuHeader.addEventListener('mouseleave', function () {
      submenu.classList.remove('visible')
    })
  });
})();