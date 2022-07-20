// const
//   range = document.getElementById('range-price'),
//   rangeV = document.getElementById('rangeV-price'),
//   setValue = ()=>{
//     const
//       newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
//       newPosition = 10 - (newValue * 0.2);
//     rangeV.innerHTML = `<span>${range.value} triệu VND</span>`;
//     rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
//   };
// document.addEventListener("DOMContentLoaded", setValue);
// range.addEventListener('input', setValue);



$(document).ready(function () {
  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range1 = document.querySelector(".slider .progress"),
  rangeVLeft = document.getElementById('rangeV-price-left'),
  rangeVRight = document.getElementById('rangeV-price-right');
let priceGap = 1000;


priceInput.forEach(input => {
  input.addEventListener("input", e => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range1.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range1.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if ((maxVal - minVal) < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range1.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
      range1.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

      newPositionLeft = 10 - (minVal * 0.2);
      rangeVLeft.innerHTML = `<span>${minVal/1000} triệu VND</span>`;
      rangeVLeft.style.left = `calc(${minVal/100}% + (${newPositionLeft/100}px))`;

      newPositionRight= 10 - (maxVal * 0.2);
      rangeVRight.innerHTML = `<span>${maxVal/1000} triệu VND</span>`;
      rangeVRight.style.left = `calc(${maxVal/100}% + (${newPositionRight/100}px))`;
    }
  });
});
});