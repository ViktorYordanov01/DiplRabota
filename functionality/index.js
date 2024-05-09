var button = document.getElementById("theme-toggle-btn");
var dropdown = document.getElementById("theme-dropdown");

button.addEventListener("click", function() {
  dropdown.classList.toggle("show");
});

window.addEventListener("click", function(event) {
  if (!event.target.matches('.theme-toggle-btn')) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
});

document.getElementById("dark-theme").addEventListener("click", function() {
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "#fff";
  document.getElementById("theme-toggle-btn").style.backgroundColor = "#333";
});

document.getElementById("white-theme").addEventListener("click", function() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#333";
  document.getElementById("theme-toggle-btn").style.backgroundColor = "#fff";
});