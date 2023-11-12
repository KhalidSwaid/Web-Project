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
