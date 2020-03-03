const productsArray = document.getElementById("products");
const itemsNumber = document.getElementById("input__number");
const productsSelectNumber = document.getElementById("number");

const data = [];

const addproducts = (input, productsNumber = 4) => {
  itemsNumber.textContent = `${input.length}`;
  productsArray.innerHTML = "";
  input.slice(0, productsNumber).map(item => {
    productsArray.innerHTML += `
    <div class="products__card" id="${item.id}">
    <div class="mainInfo">
      <p class="card__amount">
        <img src="/assets/cart.png" alt="" /> <span>${
          item.availability.name
        }</span>
      </p>
      <p class="card__savings">oszczędzasz: <span> ${item.price.gross
        .base_float - item.price.gross.promo_float}zł</span></p>
    </div>

    <img
      src="https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_${
        item.main_image
      }.jpg"
      alt="${item.name}"
       class="card__img"
    />

    <div class="card__description">
      <div class="card__prices">
        <p class="card__newPrice">${item.price.gross.promo_float} zł</p>
        <p class="card__oldPrice">${item.price.gross.base_float} zł</p>
      </div>
      <p class="card__name">
        ${item.name}
      </p>
      <p class="card__brand">${item.producer.name} zł</p>
    </div>
  </div>
    `;
  });
};

const fetchData = () => {
  // fetch("data/example.json")
  //   .then(response => response.json())
  //   .then(result => {
  //     data.push(result);
  //     addproducts(data[0].list);
  //   })
  //   .catch(err => console.log(err));

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data/example.json", true);
  xhr.send(null);

  xhr.onload = () => {
    if (xhr.status === 200) {
      data.push(JSON.parse(xhr.response));

      addproducts(data[0].list);
    } else console.log("error");
  };
};

productsSelectNumber.addEventListener("change", e => {
  console.log(e.target.value);
  addproducts(data[0].list, e.target.value);
});

fetchData();

// "use strict";

// var productsArray = document.getElementById("products");
// var itemsNumber = document.getElementById("input__number");
// var productsSelectNumber = document.getElementById("number");
// var data = [];

// var addproducts = function addproducts(input) {
//   var productsNumber =
//     arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

//   itemsNumber.textContent = "".concat(input.length);
//   productsArray.innerHTML = "";
//   input.slice(0, productsNumber).map(function(item) {
//     productsArray.innerHTML += '\n    <div class="products__card" id="'
//       .concat(
//         item.id,
//         '">\n    <div class="mainInfo">\n      <p class="card__amount">\n        <img src="./assets/cart.png" alt="" /> <span>'
//       )
//       .concat(
//         item.availability.name,
//         '</span>\n      </p>\n      <p class="card__discount">oszcz\u0119dzasz: <span> '
//       )
//       .concat(
//         item.price.gross.base_float - item.price.gross.promo_float,
//         'z\u0142</span></p>\n    </div>\n\n    <img\n      src="https://www.outletmeblowy.pl/environment/cache/images/300_300_productGfx_'
//       )
//       .concat(
//         item.main_image,
//         '.jpg"\n      alt=""\nclass="card__img"\n    />\n\n    <div class="card__description">\n      <div class="card__prices">\n        <p class="card__newPrice">'
//       )
//       .concat(
//         item.price.gross.promo_float,
//         ' z\u0142</p>\n        <p class="card__oldPrice">'
//       )
//       .concat(
//         item.price.gross.base_float,
//         ' z\u0142</p>\n      </div>\n      <p class="card__description">\n        '
//       )
//       .concat(item.name, '\n      </p>\n      <p class="card__brand">')
//       .concat(item.producer.name, "</p>\n    </div>\n  </div>\n    ");
//   });
// };

// var fetchData = function fetchData() {
//   // fetch("data/example.json")
//   //   .then(response => response.json())
//   //   .then(result => {
//   //     data.push(result);
//   //     addproducts(data[0].list);
//   //   })
//   //   .catch(err => console.log(err));
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "data/example.json", true);
//   xhr.send(null);

//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       data.push(JSON.parse(xhr.response));
//       addproducts(data[0].list);
//     } else console.log("error");
//   };
// };

// productsSelectNumber.addEventListener("change", function(e) {
//   console.log(e.target.value);
//   addproducts(data[0].list, e.target.value);
// });
// fetchData();
