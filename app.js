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
  const initialPrice = document.querySelector("#slider-two").value; //get the initial value of the slider

  document.querySelector("#price-two").textContent = initialPrice; //set the initial value in the price span

  //Function to filter clothes based on selected price
  function filterClothes() {
    const selectedPrice = document.querySelector("#slider-two").value; //get the selected price from the slider
    const clothingItems = document.querySelectorAll(".suit"); //select all clothing items
    //loop through each clothing item
    Array.from(clothingItems).forEach(function (item) {
      const itemPrice = parseInt(item.querySelector("span b").textContent); //get the price of the current item
      if (itemPrice >= selectedPrice) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  //Event listener for the slider input change
  document.querySelector("#slider-two").addEventListener("input", function () {
    const selectedPrice = this.value; //get the selected price from the slider
    document.querySelector("#price-two").textContent = selectedPrice; //update the displated price
    filterClothes(); //call the funtion to update displayed items
  });

  filterClothes(); //initial flitering based on the initial slider value

  //event listener for color items
  Array.from(colorItems).forEach((colorItem) => {
    colorItem.addEventListener("click", function () {
      const selectedColor = this.getAttribute("data-color"); //get the selected color from the color selector
      filterClothingByColor(selectedColor); //filtering clothes according to the selected color
    });
  });

  //Function to filter clothing items based on color
  function filterClothingByColor(color) {
    const allSuits = document.querySelectorAll(".suit"); //select all clothing items
    Array.from(allSuits).forEach((suit) => {
      const suitColor = suit.getAttribute("data-color"); //get the color of the current item

      if (color === "all" || suitColor === color) {
        suit.style.display = "block";
      } else {
        suit.style.display = "none";
      }
    });
  }
});
