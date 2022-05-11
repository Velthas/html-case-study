//This generates HTML for a dropdown menu
const dropdownGenerator = (function () {
    function createLogo() {
      const logo = document.createElement('div');
      logo.classList.add('logo');
  
      const logoContent = prompt('What do you wish to have in the logo?');
      logo.textContent = logoContent;
  
      return logo;
    }
  
    function createSubItems(number) {
      const containerList = document.createElement('ul');
      containerList.classList.add('sub-menu');
  
      for (let i = 0; i < number; i++) {
        const subMenuItem = document.createElement('li');
        subMenuItem.classList.add('subItem');
        const itemContent = prompt(
          `What will sub menu item no.${i + 1} contain?`
        );
        subMenuItem.textContent = itemContent;
        containerList.appendChild(subMenuItem);
      }
  
      return containerList;
    }
  
    function createMenuItems(number) {
      const navLinks = document.createElement('ul');
      navLinks.classList.add('nav-links');
      let subItemsList;
  
      for (let i = 0; i < number; i++) {
        const menuTextContent = prompt(
          `What will menu item no.${i + 1} contain?`
        );
  
        const listItem = document.createElement('li');
        listItem.classList.add('menuItem');
  
        const mainItem = document.createElement('a');
        mainItem.classList.add('parentItem');
        mainItem.textContent = menuTextContent;
  
        const numberOfChildren = prompt(
          `How many sub items will menu ${menuTextContent} have?`
        );
        if (Number(numberOfChildren) !== NaN && numberOfChildren > 0) {
          mainItem.textContent = mainItem.textContent + ' ▼';
        }
  
        if (Number(numberOfChildren) === NaN) return;
        else subItemsList = createSubItems(Number(numberOfChildren));
  
        listItem.appendChild(mainItem);
        listItem.appendChild(subItemsList);
  
        navLinks.appendChild(listItem);
      }
  
      return navLinks;
    }
  
    function addEvents() {
      const menuItems = document.querySelectorAll('.menuItem');
      menuItems.forEach((item) => {
        const menuHeader = item.querySelector('.parentItem');
        const submenu = item.querySelector('.sub-menu');
  
        menuHeader.addEventListener('mouseenter', function () {
          submenu.classList.add('visible');
          menuHeader.classList.add('active');
        });
  
        menuHeader.addEventListener('mouseleave', function () {
          submenu.classList.remove('visible');
          menuHeader.classList.remove('active');
        });
  
        submenu.addEventListener('mouseenter', function () {
          submenu.classList.add('visible');
          menuHeader.classList.add('active');
        });
  
        submenu.addEventListener('mouseleave', function () {
          submenu.classList.remove('visible');
          menuHeader.classList.remove('active');
        });
      });
    }
  
    function createDropdown() {
      //Container
      const navBar = document.createElement('nav');
  
      //Gets the custom logo
      const logo = createLogo();
  
      //Gets the number of items on the NavBar
      const numberOfMenus = prompt(
        'How many navbar items do you want? (numeric value)'
      );
  
      let menu;
  
      //Create the sections of the navbar
      if (Number(numberOfMenus) === NaN) return;
      else menu = createMenuItems(Number(numberOfMenus));
  
      navBar.appendChild(logo);
      navBar.appendChild(menu);
      document.querySelector('body').appendChild(navBar);
  
      addEvents();
    }

    addEvents();
  
    return { createDropdown };
  })();

  const burgerMenu = (function () {

    function addBurgerEvents() {

      const burger = document.querySelector('#burger-menu');

      burger.addEventListener('click', function () {

        const navbarItems = document.querySelector('.nav-links');
        navbarItems.classList.toggle('visible');

        burger.classList.toggle('active');


      })
      

    }

    addBurgerEvents();

  })();