document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('countrySelect');
  const trigger = document.getElementById('countryTrigger');
  const menu = document.getElementById('countryMenu');
  const selectedFlag = document.getElementById('selectedFlag');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    select.classList.toggle('open');
  });

  menu.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    selectedFlag.className = 'fi ' + li.dataset.flag;
    select.classList.remove('open');
  });

  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) select.classList.remove('open');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.category-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('category-tab--active'));
      tab.classList.add('category-tab--active');
      // tab.dataset.category holds "fruits", "vegetables", etc.
      // filter/swap your product cards here based on that value
    });
  });
});


// ---- Mobile sidebar navigation ----
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navClose = document.getElementById('navClose');
  const navOverlay = document.getElementById('navOverlay');

  if (!menuToggle || !navLinks || !navOverlay) return;

  const openMenu = () => {
    navLinks.classList.add('nav-links--active');
    navOverlay.classList.add('nav-overlay--active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navLinks.classList.remove('nav-links--active');
    navOverlay.classList.remove('nav-overlay--active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('nav-links--active');
    isOpen ? closeMenu() : openMenu();
  });

  navClose?.addEventListener('click', closeMenu);
  navOverlay.addEventListener('click', closeMenu);

  // Close the sidebar after tapping a nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Reset sidebar state if resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
});