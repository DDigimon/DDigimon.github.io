(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-navigation');
  if (!toggle || !navigation) return;

  const setMenu = (open) => {
    navigation.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  const desktop = window.matchMedia('(min-width: 921px)');
  desktop.addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });

  const links = [...navigation.querySelectorAll('a')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let scheduled = false;
  const updateActiveLink = () => {
    scheduled = false;
    const offset = document.querySelector('.site-header').offsetHeight + 100;
    let activeId = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) activeId = section.id;
    }
    for (const link of links) {
      const active = link.getAttribute('href') === `#${activeId}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateActiveLink);
    }
  }, { passive: true });
  updateActiveLink();
})();
