const listHeader = `<ul class="container hero-list">
  <li><a class="link-task" href="./task-1.html">Task 1</a></li>
  <li><a class="link-task" href="./task-2.html">Task 2</a></li>
  <li><a class="link-task" href="./task-3.html">Task 3</a></li>
  <li><a class="link-task" href="./task-4.html">Task 4</a></li>
  <li><a class="link-task" href="./task-5.html">Task 5</a></li>
  <li><a class="link-task" href="./task-6.html">Task 6</a></li>
</ul>`;

const containerHeader = document.querySelector('#header-placeholder');

containerHeader.innerHTML = listHeader;

function highlightCurrentLink() {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.link-task').forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
      link.classList.add('active');
    }
  });
}

highlightCurrentLink();
