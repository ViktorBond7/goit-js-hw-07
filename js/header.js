fetch('./header.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('#header-placeholder').innerHTML = data;

    requestAnimationFrame(() => {
      highlightCurrentLink();
    });
  });

function highlightCurrentLink() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.link-task').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}
