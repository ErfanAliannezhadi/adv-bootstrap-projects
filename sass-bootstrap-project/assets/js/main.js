const gallary_button_nature = document.getElementById("gallary-button-nature");
const gallary_button_technology = document.getElementById(
  "gallary-button-technology"
);
const gallary_button_travel = document.getElementById("gallary-button-travel");
const gallary_button_all = document.getElementById("gallary-button-all");
const gallary_photo = document.getElementsByClassName("gallary-photo");
const gallary_nature = document.getElementsByClassName("gallary-nature");
const gallary_technology =
  document.getElementsByClassName("gallary-technology");
const gallary_travel = document.getElementsByClassName("gallary-travel");

gallary_button_nature.addEventListener("click", function () {
  for (item of gallary_photo) {
    item.style.display = "none";
  }
  for (item of gallary_nature) {
    item.style.display = "block";
  }
});
gallary_button_technology.addEventListener("click", function () {
  for (item of gallary_photo) {
    item.style.display = "none";
  }
  for (item of gallary_technology) {
    item.style.display = "block";
  }
});
gallary_button_travel.addEventListener("click", function () {
  for (item of gallary_photo) {
    item.style.display = "none";
  }
  for (item of gallary_travel) {
    item.style.display = "block";
  }
});
gallary_button_all.addEventListener("click", function () {
  for (item of gallary_photo) {
    item.style.display = "block";
  }
});
