fetch('/index.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('header').innerHTML = data;

    highlightCurrentLink();
  });

function highlightCurrentLink() {
  const currentPage = window.location.pathname.split('/').pop();

  document.querySelectorAll('.hero-list a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}
