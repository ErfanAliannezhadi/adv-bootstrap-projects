const dark_light_switch = document.getElementById("dark-light-mode-switch");
const html = document.getElementById("html");
// determine dark mode
let dark_mode;
let i = JSON.parse(localStorage.getItem("dark-mode"));
if (i == false || i == null) {
  dark_mode = false;
} else {
  dark_mode = true;
}
document.addEventListener("DOMContentLoaded", function () {
  if (dark_mode) {
    html.className = "dark";
    dark_light_switch.setAttribute("checked", "true");
  } else {
    html.className = "";
  }
});
dark_light_switch.addEventListener("click", function () {
  if (dark_light_switch.checked) {
    html.className = "dark";
    localStorage.setItem("dark-mode", "true");
  } else {
    html.className = "";
    localStorage.setItem("dark-mode", "false");
  }
});

// count down
const enddate = new Date(2023, 2, 8).getTime();
let nowdate = new Date().getTime();
let time = enddate - nowdate;
document.getElementById("count-days").innerText = Math.floor(
  time / (1000 * 60 * 60 * 24)
);
document.getElementById("count-hours").innerText = Math.floor(
  (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
document.getElementById("count-minutes").innerText = Math.floor(
  (time % (1000 * 60 * 60)) / (1000 * 60)
);
document.getElementById("count-secondes").innerText = Math.floor(
  (time % (1000 * 60)) / 1000
);

setInterval(function () {
  let nowdate = new Date().getTime();
  let time = enddate - nowdate;
  document.getElementById("count-days").innerText = Math.floor(
    time / (1000 * 60 * 60 * 24)
  );
  document.getElementById("count-hours").innerText = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.getElementById("count-minutes").innerText = Math.floor(
    (time % (1000 * 60 * 60)) / (1000 * 60)
  );
  document.getElementById("count-secondes").innerText = Math.floor(
    (time % (1000 * 60)) / 1000
  );
}, 1000);
