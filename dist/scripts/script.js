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
      // collapseAllAccordion(); // if want only to show 1 collapse at time
      element.classList.toggle('active');
      e.currentTarget.querySelector('.detail').classList.toggle('hidden');
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
  // Activate nav link based on hash
  function activateNavLink(hash) {
    removeAllActiveNavLinks();
    const activeLink = {
      '#': () => selector('#navbar-menu div ul li:nth-child(1)').classList.add('active'),
      '#features': () => selector('#navbar-menu div ul li:nth-child(2)').classList.add('active'),
      '#pricing': () => selector('#navbar-menu div ul li:nth-child(3)').classList.add('active'),
      '#faq': () => selector('#navbar-menu div ul li:nth-child(4)').classList.add('active'),
    }
    const activate = hash === '' ? activeLink['#'] : activeLink[hash];
    activate();
  }
  function hashChange() {
    const { hash } = window.location;
    activateNavLink(hash);
  }
  window.onhashchange = hashChange;
  window.addEventListener('scroll', () => {
    const { scrollY: scroll } = window;
    if (scroll > 200) {
      navbar.classList.add('backdrop-blur');
      navbar.classList.remove('bg-slate-100');
      navbar.classList.add('bg-transparent');
    } else {
      navbar.classList.remove('backdrop-blur');
      navbar.classList.add('bg-slate-100');
      navbar.classList.remove('bg-transparent');
    }
    const companiesElement = selector('#companies');
    const reviewElement = selector('#review');
    const pricingElement = selector('#pricing');
    if (
      scroll > 0
      && scroll < companiesElement.offsetTop + companiesElement.clientHeight
    ) {
      activateNavLink('');
    }
    if (
      scroll > companiesElement.offsetTop + companiesElement.clientHeight
      && scroll < reviewElement.offsetTop + reviewElement.clientHeight
    ) {
      activateNavLink('#features');
    }
    if (
      scroll > reviewElement.offsetTop + reviewElement.clientHeight
      && scroll < pricingElement.offsetTop + pricingElement.clientHeight
    ) {
      activateNavLink('#pricing');
    }
    if (
      scroll > pricingElement.offsetTop + pricingElement.clientHeight
    ) {
      activateNavLink('#faq');
    }
  });
  document.querySelector('#theme-toggler').addEventListener('click', (e) => {
    document.body.classList.toggle('dark');
    e.currentTarget.classList.toggle('active');
  });