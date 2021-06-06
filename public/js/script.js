const navToggle = document.querySelector('.nav-toggle');

function toggleContentDisplay(toggle) {
  document.querySelector('.content').style.display = toggle ? 'none' : 'flex';
}

navToggle.addEventListener('click', () => {
  toggleContentDisplay(navToggle.checked);
});

toggleContentDisplay(navToggle.checked);
