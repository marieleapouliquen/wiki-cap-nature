// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }

  // Marquer le lien sidebar courant en fonction du scroll
  const sections = document.querySelectorAll('main.content h2[id], main.content h3[id]');
  const sidebarLinks = document.querySelectorAll('.sidebar a');
  if (sections.length && sidebarLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          sidebarLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + id) {
              sidebarLinks.forEach(l => l.classList.remove('current'));
              link.classList.add('current');
            }
          });
        }
      });
    }, { rootMargin: '-100px 0px -60% 0px' });
    sections.forEach(s => observer.observe(s));
  }
});
