// const toggleBar = document.querySelector("#toggle-bar");
// const buttons = document.querySelector("#buttons");

// toggleBar.addEventListener("click", function (e) {
//   if (buttons.style.display === "none" || buttons.style.display === "") {
//     buttons.style.display = "block";
//   } else {
//     buttons.style.display = "none";
//   }
// });

const slider = document.querySelector("#slider");
const output = document.querySelector("#price");

output.innerHTML = slider.value + "&#x20AA;";

slider.oninput = function () {
  output.innerHTML = this.value + "&#x20AA;";
};

const filterButton = document.querySelector("#filter-btn");
const filterPopup = document.querySelector("#filter-popup");

filterButton.addEventListener("click", function () {
  if (filterPopup.style.display === "none") {
    filterPopup.style.display = "block";
  } else {
    filterPopup.style.display = "none";
  }
});

filterPopup.addEventListener("mouseout", function (event) {
  if (!isMouseInside(event, filterPopup)) {
    filterPopup.style.display = "none";
  }
});

function isMouseInside(event, element) {
  const rect = element.getBoundingClientRect();
  return (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
}
