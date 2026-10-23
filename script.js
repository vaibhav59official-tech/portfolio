// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Close mobile nav when clicking any link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
  });
});

// Dynamic Copyright Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Active Nav Link on Scroll (ScrollSpy)
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav a[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add('active');
    } else {
      if (navLink) navLink.classList.remove('active');
    }
  });
});
