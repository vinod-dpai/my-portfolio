const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', (e) => {
  if (navToggle.checked) {
    document.querySelector('.content').style.display = 'none';
  } else {
    document.querySelector('.content').style.display = 'flex';
  }
});
