const navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
  if (scrollY > 100) {
    navbar.className = "navbar navbar-expand-lg py-3 fixed-top bg-light shadow";
  } else {
    navbar.className = "navbar navbar-expand-lg py-3 fixed-top";
  }
});
