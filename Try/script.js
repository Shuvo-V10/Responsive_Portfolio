// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
// one.onclick = function () {
//   one.classList.add("active");
//   two.classList.remove("active");
//   three.classList.remove("active");
//   four.classList.remove("active");
//   five.classList.remove("active");
// };
// two.onclick = function () {
//   one.classList.add("active");
//   two.classList.add("active");
//   three.classList.remove("active");
//   four.classList.remove("active");
//   five.classList.remove("active");
// };
// three.onclick = function () {
//   one.classList.add("active");
//   two.classList.add("active");
//   three.classList.add("active");
//   four.classList.remove("active");
//   five.classList.remove("active");
// };
// four.onclick = function () {
//   one.classList.add("active");
//   two.classList.add("active");
//   three.classList.add("active");
//   four.classList.add("active");
//   five.classList.remove("active");
// };
// five.onclick = function () {
//   one.classList.add("active");
//   two.classList.add("active");
//   three.classList.add("active");
//   four.classList.add("active");
//   five.classList.add("active");
// };

const steps = [
  {
    name: "Add To Cart",
    icon: "uil-capture",
  },
  {
    name: "Fill Details",
    icon: "uil-clipboard-notes",
  },
  {
    name: "Make Payment",
    icon: "uil-credit-card",
  },
  {
    name: "Order in Progress",
    icon: "uil-exchange",
  },
  {
    name: "Order Arrived",
    icon: "uil-map-marker",
  },
  {
    name: "Nissan GTR",
    icon: "uil-map-marker",
  },
];

const ul = document.querySelector("ul");

for (let i = 1; i < steps.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = `
      <i class="icon ${steps[i].icon}" "></i>
      <div class="progress">
        <p>${i + 1}</p>     
      </div>
      <!-- <i class="uil uil-check"></i> --> 
      <p class="text">${steps[i].name}</p>
    `;

  ul.appendChild(li);
}
