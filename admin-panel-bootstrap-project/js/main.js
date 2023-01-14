const sidbarOC = document.getElementById("sidbar-OC");
const sidbar = document.getElementById("sidbar");
const main = document.getElementById("main");
sidbarOC.addEventListener("click", function () {
  if (sidbar.style.marginRight == "-300px") {
    sidbar.style.marginRight = "0";
    main.style.marginRight = "300px";
  } else {
    sidbar.style.marginRight = "-300px";
    main.style.marginRight = "0";
  }
});

const dropdowns = document.getElementsByClassName("sidebar-dropdown");
const submenus = document.getElementsByClassName("submenu");

for (let i = 0; i < 5; i++) {
  dropdowns[i].addEventListener("click", function () {
    if (submenus[i].style.display == "none") {
      submenus[i].style.display = "block";
    } else {
      submenus[i].style.display = "none";
    }
  });
}
