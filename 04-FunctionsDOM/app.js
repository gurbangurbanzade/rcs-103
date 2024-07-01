// f(x)=2x+1

// function sayHello() {
//   // console.log("hello Gurban");

//   return "hello Gabil";
// }

// sayHello();
// // let hello ="gabil"

// let name = sayHello();

// console.log(name);

// function result() {
//   let cem = 5 + 3;
//   let hasil = 5 * 3;

//   let result = hasil - cem;

//   return result;
// }

// console.log(result());

// result();
// result();
// result();
// result();
// result();
// result();
// result();
// result();

// let netice = result();

// console.log(netice, "netice");

// function sayHello(name) {
//   if (name == undefined) {
//     console.log("ad daxil edin");
//   } else {
//     console.log(`hello ${name}`);
//   }
// }

// sayHello("gurban");
// sayHello("ali");
// sayHello("kanan");
// sayHello(4);

// sayHello();
// sayHello("kanan");

// let a = prompt("a daxil edin");
// let b = prompt("b daxil edin");

// function sum1(x, y) {
//   let sum;

//   if (+x == x * 1 && +y == y * 1) {
//     sum = +x + +y;
//     return sum;
//   } else {
//     alert("eded daxil edin");
//   }

// if (typeof +x == "number" && typeof +y == "number") {
//   sum = +x + +y;
//   return sum;
// } else {
//   alert("eded daxil edin");
// }
// }

// console.log(sum1(a, b));

// let name;
// if (true) {
//   name = "Ali";
// }

// console.log(name);

// console.log(typeof 5);
// console.log(typeof "gurban");
// console.log(5 * "gurban");
// console.log(typeof NaN);

// sayHello();

// function sayHello() {
//   console.log("hello");
// }

// sayHello();

// const sayHello = function () {
//   console.log("hello");
// };

// console.log(a)
// const a=8

// const sayHello = () => {
//   console.log("hello");
// };

// console.log(window);
// console.log(window.document.body);

// window.alert();

// alert()

// console.log(input);

// console.log(btn);

// btn.innerHTML = "submit";
// btn.style.color = "red";
// btn.style.backgroundColor = "green";

// btn.addEventListener("click", function () {
//   // console.log("clicked me");
//   // console.log(5 + 3);
//   console.log(input.value);
//   input.value = "";
// });

// input.addEventListener("input", function () {
//   console.log(input.value);
// });

const btn = document.querySelector(".btn");
const input = document.querySelector(".customInput");
const form = document.querySelector(".form");
const list = document.querySelector(".toDoList");
// const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("hello");
  // console.log(input.value);
  // list.innerHTML += `<li class="toDoItem">${input.value}</li>`;

  // li.innerText = "   <h1>test</h1>";
  // li.innerHTML = "   <h1>test</h1>";

  createLi();

  input.value = "";
});
const delTodo = () => {
  // console.log(e.target.innerText);
  // e.target.style.color = "red";
  console.log(this);
  // console.log(e.target.parentElement.remove());
};

function createLi() {
  const li = document.createElement("li");
  const delButton = document.createElement("button");

  li.innerText = input.value;
  delButton.innerText = "Delete";

  li.className = "toDoItem";
  delButton.className = "delteBtn";

  delButton.addEventListener("click", delTodo);

  li.appendChild(delButton);

  list.appendChild(li);
}

// function delTodo(e) {
//   // console.log(e.target.innerText);
//   // e.target.style.color = "red";
//   console.log(this);
//   // console.log(e.target.parentElement.remove());
// }
