const range = document.querySelector(".inputRange");
const field = document.getElementById("num1");

range.addEventListener("input", function (e) {
  field.value = e.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
field.addEventListener("input", function (e) {
  range.value = e.target.value;
});

const range2 = document.querySelector(".inputRange2");
const field2 = document.getElementById("num2");

range2.addEventListener("input", function (e) {
  field2.value = Number(e.target.value).toFixed(2);
});
field2.addEventListener("input", function (e) {
  range2.value = Number(e.target.value).toFixed(2);
});

const range3 = document.querySelector(".inputRange3");
const field3 = document.getElementById("num3");

range3.addEventListener("input", function (e) {
  field3.value = e.target.value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
field3.addEventListener("input", function (e) {
  range3.value = e.target.value;
});

document.getElementById("btn").onclick = function () {
  theReasult = document.getElementById("demo").innerHTML = `${Math.round(
    Number(range.value) *
      12 *
      Number(range2.value) *
      0.6 *
      Number(`0.${range3.value}`)
  )}`
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
