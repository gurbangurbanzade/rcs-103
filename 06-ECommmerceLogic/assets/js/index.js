import { getData } from "./api/api.js";
import { createCard } from "./helpers/functions.js";
const products = document.querySelector(".products");
let basket = JSON.parse(localStorage.getItem("basket")) || [];
getData().then((data) => {
  createCard(products, data);

  products.addEventListener("click", (e) => {
    if (e.target.classList.contains("addBasket")) {
      if (basket.find((elem) => elem.id == e.target.getAttribute("customId"))) {
        let findElem = JSON.parse(localStorage.getItem("basket")).find(
          (elem) => elem.id == e.target.getAttribute("customId")
        );

        findElem.count++;

        let newArr = basket.filter((elem) => elem.id !== findElem.id);

        newArr.push(findElem);

        localStorage.setItem("basket", JSON.stringify(newArr));
      } else {
        let obj = {
          id: +e.target.getAttribute("customId"),
          count: 1,
        };

        basket.push(obj);
        localStorage.setItem("basket", JSON.stringify(basket));
      }
    }
  });
});
