// Smooth Scroll for Navigation
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
