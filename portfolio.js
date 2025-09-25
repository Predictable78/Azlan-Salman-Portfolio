// allow sections to be toggled open/closed by clicking their header
const sections = document.querySelectorAll('main section');
sections.forEach(sec => {
  const header = sec.querySelector('h2');
  header.addEventListener('click', () => {
    sec.classList.toggle('active');
  });
});
