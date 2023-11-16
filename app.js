// const toggleBar = document.querySelector("#toggle-bar");
// const buttons = document.querySelector("#buttons");

// toggleBar.addEventListener("click", function (e) {
//   if (buttons.style.display === "none" || buttons.style.display === "") {
//     buttons.style.display = "block";
//   } else {
//     buttons.style.display = "none";
//   }
// });

//Slider: price representation
const slider = document.querySelector("#slider");
const output = document.querySelector("#price");

output.innerHTML = slider.value + "&#x20AA;";

slider.oninput = function () {
  output.innerHTML = this.value + "&#x20AA;";
};

const slider2 = document.querySelector("#slider-two");
const output2 = document.querySelector("#price-two");
output2.innerHTML = slider.value + "&#x20AA;";

slider2.oninput = function () {
  output2.innerHTML = this.value + "&#x20AA;";
};

//Pop-up window to filter clothes (According to color, price and size)
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

//Pop-up window disappears when hovering outside the window limits
function isMouseInside(event, element) {
  const rect = element.getBoundingClientRect();
  return (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const colorItems = document.querySelectorAll(".color-item");
  const clothingImages = document.querySelector("#clothing-images");

  //This section is for letting slider price responsive
  const initialPrice = document.querySelector("#slider-two").value;
  console.log(initialPrice);

  document.querySelector("#price-two").textContent = initialPrice;

  function filterClothes() {
    const selectedPrice = document.querySelector("#slider-two").value;
    const clothingItems = document.querySelectorAll(".suit");
    Array.from(clothingItems).forEach(function (item) {
      const itemPrice = parseInt(item.querySelector("span b").textContent);
      if (itemPrice >= selectedPrice) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  document.querySelector("#slider-two").addEventListener("input", function () {
    const selectedPrice = this.value;
    document.querySelector("#price-two").textContent = selectedPrice;
    filterClothes();
  });

  filterClothes();

  Array.from(colorItems).forEach((colorItem) => {
    colorItem.addEventListener("click", function () {
      const selectedColor = this.getAttribute("data-color");
      filterClothingByColor(selectedColor);
    });
  });

  function filterClothingByColor(color) {
    const allSuits = document.querySelectorAll(".suit");
    Array.from(allSuits).forEach((suit) => {
      const suitColor = suit.getAttribute("data-color");

      if (color === "all" || suitColor === color) {
        suit.style.display = "block";
      } else {
        suit.style.display = "none";
      }
    });
  }
});
