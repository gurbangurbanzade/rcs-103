import { getData } from "./api/api.js";

const products = document.querySelector(".products");

getData().then((data) => {
  console.log(data);
  data.forEach((element) => {
    products.innerHTML += `
<div class="card">
<div class="cardImg">
  <img class="prodImg" src="${element.image}" alt="" />
</div>
<h4 class="cardName">${element.title.substring(0, 10)}...</h4>
<p class="cardDesc">${element.description.substring(0, 15)}...</p>
<p class="cardPrice">${element.price}</p>
<button class="addBasket">Add basket</button>
<button class="addFav">Add Fav</button>
<h3 class="logo">Tap.az</h3>
</div>`;
  });

  const allAddBasketBtns = document.querySelectorAll(".addBasket");

  for (let btn of allAddBasketBtns) {
    // console.log(btn);

    btn.addEventListener("click", (e) => {
      console.log(e.target);
      //   console.log("salam");
    });
  }

  console.log(allAddBasketBtns);
});
