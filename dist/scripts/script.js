hashChange();
  function selector(selectors) {
    return document.querySelector(selectors);
  }
  function selectorAll(selectors) {
    return document.querySelectorAll(selectors);
  }
  const navbar = selector('#navbar');
  const navbarMenu = selector('#navbar-menu');
  const navbarButton = selector('#navbar-button');
  const faqAccordionElements = selectorAll('#faq-accordion div');
  const faqAccordionDetailElements = selectorAll('.detail');
  const pricingButtonElements = selector('#pricing-button');

  // FAQ accordion event listener
  faqAccordionElements.forEach((element) => {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
      collapseAllAccordion();
      element.classList.add('active');
      e.currentTarget.querySelector('.detail').classList.remove('hidden');
    }, true);
  });
  // Close all active accordion
  function collapseAllAccordion() {
    faqAccordionElements.forEach((element) => {
      element.classList.remove('active');
    });
    faqAccordionDetailElements.forEach((element) => {
      element.classList.add('hidden');
    });
  }
  // Toggle navbar menu and hamburger class
  navbarButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
    navbarButton.querySelector('.hamburger').classList.toggle('active')
  });
  // Pricing button event listener
  pricingButtonElements.querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', (e) => {
      removeActiveButton();
      element.classList.add('active');
    });
  });
  // Remove all active button classes
  function removeActiveButton() {
    pricingButtonElements.querySelectorAll('button').forEach((element) => {
      element.classList.remove('active');
    });
  }
  // Remove all active nav link classes
  function removeAllActiveNavLinks() {
    selectorAll('#navbar-menu div ul li').forEach((element) => {
      element.classList.remove('active');
    });
  }
  function hashChange() {
    const { hash } = window.location;
    removeAllActiveNavLinks();
    const activeLink = {
      '#': () => selector('#navbar-menu div ul li:nth-child(1)').classList.add('active'),
      '#features': () => selector('#navbar-menu div ul li:nth-child(2)').classList.add('active'),
      '#pricing': () => selector('#navbar-menu div ul li:nth-child(3)').classList.add('active'),
      '#faq': () => selector('#navbar-menu div ul li:nth-child(4)').classList.add('active'),
    }
    let activate;
    if (hash === '') {
      activate = activeLink['#'];
    } else {
      activate = activeLink[hash];
    }
    activate();
  }
  window.onhashchange = hashChange;
  // window.addEventListener('scroll', () => {
  //   if (!navbarMenu.classList.contains('hidden')) {
  //     if (window.pageYOffset > 200) {
  //       navbar.classList.add('backdrop-blur');
  //       navbar.classList.add('dark:bg-dark/20');
  //       navbar.classList.remove('dark:bg-dark');
  //     } else {
  //       navbar.classList.remove('backdrop-blur');
  //       navbar.classList.add('dark:bg-dark/20');
  //       navbar.classList.remove('dark:bg-dark');
  //     }
  //   }
  // })