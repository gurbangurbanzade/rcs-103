// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

console.log("start");

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0 && i != 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {

//   console.log(i);

//   if (i == 6) {
//     break;
//   }
// }

let name = "gurban";

// console.log(name[2]);

// for (let i = 0; i < name.length; i++) {
//   console.log(`${i + 1} -ci element ${name[i]} dir`);
//   console.log(`${name[i]}  ${name} suzunun ${i + 1}dir`);
// }
let newName = "";

// for (let i = name.length - 1; i >= 0; i--) {
//   newName += name[i];

//   // console.log(newName, "newName");
// }

// console.log(newName, "newName");

// let sum = 1;

// for (let i = 1; i <= Infinity; i++) {
//   sum *= i;

//   // console.log(sum, "sum");
//   console.log(sum, "sum");
// }

// console.log(sum, "sum");

let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;

// }

// let j = 0;

// let x = true;

// do {
//   console.log("qurban");
//   if (j == 10) {
//     x = false;
//   }
// } while (x);

// arr=[1,undefined,null,true,"gurban",[1,2,3],{name:"gurban"}];

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr = [1, undefined, null, true, "gurban", [1, 2, 3], { name: "gurban" }];
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}
let arr2 = [1];

// console.log(arr2[5]);
// arr2.length = 6;

// arr2[3] = "gurban";

// arr2.push("gurban");
// arr2.push(true);
// arr2.unshift(false);
// arr2.shift();
// arr2.pop();

// let name2 = "gurban";
// name2.console.log(arr2, "result");

// let arr3 = [
//   "baku",
//   "lankaran",
//   "sumqayit",
//   "beylagan",
//   "london",
//   "vashington",
//   "quba",
//   "balaken",
//   ["balaken", "baki", "sumqayin"],
//   "ali bayramli",
// ];

// console.log(arr3);

// for (let i = 0; i < arr3.length; i++) {
//   // console.log(arr3[i][0]);

//   if (typeof arr3[i] == "string") {
//     if (arr3[i][0] == "b") {
//       console.log(arr3[i]);
//     }
//   } else {
//     for (let j = 0; j < arr3[i].length; j++) {
//       if (arr3[i][j][0] == "b") {
//         console.log(arr3[i][j]);
//       }
//     }
//   }

//   // if()
// }

// for (let i = 0; i < arr3.length; i++) {
//   // console.log(arr3[i][0]);

//   if (arr3[i][0] == "b") {
//     console.log(arr3[i]);
//   }

//   // if()
// }

let obj = { name: "gurban", password: "1234" };

console.log(obj.name);
console.log(obj.password);

obj.name = "kanan";

console.log(obj, "obj");

let db = [
  {
    username: "gurban",
    password: "123",
    age: 30,
  },
  {
    username: "kanan",
    password: "123",
    age: 3,
  },
  {
    username: "Gabil",
    password: "ekskalibur17",
    age: 23,
  },
  {
    username: "azErin",
    password: "123",
    age: 22,
  },
  {
    username: "Alim",
    password: "123",
    age: 20,
  },
];

console.log(db[0].hasOwnProperty("name"));

console.log(db);
// for (let i = 0; i < db.length; i++) {
//   console.log(db[i].username);

// }

// for (let i = 0; i < db.length; i++) {

//   if (db[i].age > 20) {
//     console.log(db[i].username);
//   }
// }

for (let i = 0; i < db.length; i++) {
  // console.log(db[i].username[0]);
  // if (db[i].username[0].toLocaleUpperCase() == "A") {
  //   console.log(db[i].username);
  // }
  // if (db[i].username[0] == db[i].username[0].toLocaleUpperCase()) {
  //   console.log(db[i].username);
  // }
}

// obj["name"]
// console.log(db[2].password);

console.log("end");

for (let i = 0; i < db.length; i++) {
  // console.log(db[i].username);
  for (let j = 0; j < db[i].username.length; j++) {
    // console.log(db[i].username[j]);

    if (db[i].username[j] == db[i].username[j].toLocaleUpperCase()) {
      console.log(db[i].username);
    }
  }
}
