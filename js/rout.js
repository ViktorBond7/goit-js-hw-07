const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.hero-list a').forEach(link => {
  console.log('link', link);

  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
// document.addEventListener('DOMContentLoaded', () => {
//   const currentPage = window.location.pathname.split('/').pop();

//   document.querySelectorAll('.hero-list a').forEach(link => {
//     console.log('link', link);

//     if (link.getAttribute('href') === currentPage) {
//       link.classList.add('active');
//     }
//   });
// });
