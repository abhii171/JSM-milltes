/**
 * JSM Ragi & Millet Tiffins - Main Application Logic
 * Ported 1-to-1 from React App Router (app/page.tsx)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Render Navigation Items ---
  const desktopNavContainer = document.getElementById('desktop-nav');
  const mobileNavContainer = document.getElementById('mobile-nav-panel');
  const footerNavContainer = document.getElementById('footer-nav-list');

  if (desktopNavContainer && typeof navItems !== 'undefined') {
    desktopNavContainer.innerHTML = navItems
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join('');
  }

  if (mobileNavContainer && typeof navItems !== 'undefined') {
    mobileNavContainer.innerHTML = navItems
      .map((item) => `<a href="${item.href}" class="mobile-nav-link">${item.label}</a>`)
      .join('');
  }

  if (footerNavContainer && typeof navItems !== 'undefined') {
    footerNavContainer.innerHTML = navItems
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join('');
  }

  // --- 2. Render Culinary Categories ---
  const categoryGridContainer = document.getElementById('category-grid');
  if (categoryGridContainer && typeof categories !== 'undefined') {
    categoryGridContainer.innerHTML = categories
      .map(
        (item) => `
        <article class="category-card">
          <div class="icon-wrap" aria-hidden="true"></div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <span>${item.price}</span>
          <a class="category-link" href="#menu">Explore menu</a>
        </article>
      `
      )
      .join('');
  }

  // --- 3. Render Menu Cards ---
  const menuGridContainer = document.getElementById('menu-grid');
  if (menuGridContainer && typeof menuCards !== 'undefined') {
    menuGridContainer.innerHTML = menuCards
      .map(
        (item) => `
        <article class="menu-card ${item.accent}">
          <div class="menu-visual">
            <img class="menu-photo" src="${item.image}" alt="${item.imageAlt}" loading="lazy" width="400" height="230" />
            <span class="price-tag">${item.price}</span>
            <span class="item-badge">${item.tag}</span>
          </div>
          <div class="menu-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="menu-meta">
              <span>Made fresh</span>
              <strong>${item.accent === 'gold' ? '100% Ragi' : 'Traditional'}</strong>
            </div>
          </div>
        </article>
      `
      )
      .join('');
  }

  // --- 4. Render Why JSM Benefits ---
  const benefitGridContainer = document.getElementById('benefit-grid');
  if (benefitGridContainer && typeof whyList !== 'undefined') {
    benefitGridContainer.innerHTML = whyList
      .map(
        (item) => `
        <div class="benefit-card">
          <div class="benefit-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      `
      )
      .join('');
  }

  // --- 5. Render Store Locations ---
  const locationGridContainer = document.getElementById('location-grid');
  if (locationGridContainer && typeof locations !== 'undefined') {
    locationGridContainer.innerHTML = locations
      .map(
        (location) => `
        <article class="location-card">
          <div class="location-header">
            <h3>${location.name}</h3>
            <span class="loc-tag ${location.tagClass}">${location.label}</span>
          </div>
          <p class="location-address">📍 ${location.address}</p>
          <div class="hours">
            <div>
              <span>Morning Session</span>
              <strong>${location.morning}</strong>
            </div>
            <div>
              <span>Evening Session</span>
              <strong>${location.evening}</strong>
            </div>
          </div>
          <a href="${location.maps}" target="_blank" rel="noreferrer" class="direction-btn">Get directions ↗</a>
        </article>
      `
      )
      .join('');
  }

  // --- 6. Mobile Navigation Toggle Logic ---
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  let isMenuOpen = false;

  function setMenuOpen(openState) {
    isMenuOpen = openState;
    if (mobileToggleBtn) {
      mobileToggleBtn.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
    }
    if (mobileNavContainer) {
      if (isMenuOpen) {
        mobileNavContainer.classList.add('is-open');
      } else {
        mobileNavContainer.classList.remove('is-open');
      }
    }
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenuOpen(!isMenuOpen);
    });
  }

  // Close menu when clicking any mobile nav link
  if (mobileNavContainer) {
    mobileNavContainer.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        setMenuOpen(false);
      }
    });
  }

  // Close menu on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setMenuOpen(false);
    }
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (isMenuOpen && mobileNavContainer && !mobileNavContainer.contains(e.target) && e.target !== mobileToggleBtn) {
      setMenuOpen(false);
    }
  });

  // --- 7. Scroll Reveal Animation Logic (IntersectionObserver) ---
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
});
