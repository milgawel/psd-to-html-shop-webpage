// // time for special offers
// const promoHour = document.getElementById("promo__hour");

// const clock = () => {
//   const date = new Date();
//   const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//   const minutes =
//     date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//   promoHour.textContent = `${hours}:${minutes}`;
// };

// clock();
// setInterval(clock, 10000);

// // STOPWATCH

// const endTime = new Date("2020-03-07 22:00:00").getTime();

// const spanD = document.getElementById("d");
// const spanH = document.getElementById("h");
// const spanM = document.getElementById("m");
// const spanS = document.getElementById("s");

// const stopWatch = () => {
//   const nowTime = new Date().getTime();

//   let days = Math.floor(
//     endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
//   );

//   let hours =
//     Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;

//   hours = hours < 10 ? "0" + hours : hours;

//   let minutes = Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;

//   minutes = minutes < 10 ? `0${minutes}` : minutes;

//   let seconds = Math.floor(endTime / 1000 - nowTime / 1000) % 60;

//   seconds = seconds < 10 ? `0${seconds}` : seconds;

//   spanD.textContent = days;
//   spanH.textContent = hours;
//   spanM.textContent = minutes;
//   spanS.textContent = seconds;
// };

// setInterval(stopWatch, 1000);

"use strict";

// time for special offers
var promoHour = document.getElementById("promo__hour");

var clock = function clock() {
  var date = new Date();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  promoHour.textContent = "".concat(hours, ":").concat(minutes);
};

clock();
setInterval(clock, 10000); // STOPWATCH

var endTime = new Date("03/07/2020 22:00:00").getTime();
var spanD = document.getElementById("d");
var spanH = document.getElementById("h");
var spanM = document.getElementById("m");
var spanS = document.getElementById("s");

var stopWatch = function stopWatch() {
  var nowTime = new Date().getTime();

  var days = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );

  var hours =
    Math.floor(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24;
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = Math.floor(endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60;
  minutes = minutes < 10 ? "0".concat(minutes) : minutes;
  var seconds = Math.floor(endTime / 1000 - nowTime / 1000) % 60;
  seconds = seconds < 10 ? "0".concat(seconds) : seconds;

  spanD.textContent = days;
  spanH.textContent = hours;
  spanM.textContent = minutes;
  spanS.textContent = seconds;
};

setInterval(stopWatch, 1000);
