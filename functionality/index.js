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

function setThemePreference(theme) {
  localStorage.setItem('themePreference', theme);
}

function getThemePreference() {
  return localStorage.getItem('themePreference');
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    document.getElementById("theme-toggle-btn").style.backgroundColor = "#333"; 
    document.getElementById("icon-theme").src = "/icons/moon-stars-fill.svg";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#333";
    document.getElementById("theme-toggle-btn").style.backgroundColor = "#fff"; 
    document.getElementById("icon-theme").src="/icons/brightness-high-fill.svg";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var savedTheme = getThemePreference();
  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

document.getElementById("dark-theme").addEventListener("click", function() {
  setThemePreference('dark');
  applyTheme('dark');
});

document.getElementById("white-theme").addEventListener("click", function() {
  setThemePreference('white');
  applyTheme('white');
});

