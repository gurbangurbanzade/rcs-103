const express = require("express");
const mysql = require("mysql2");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // MySQL istifadəçi adınızı burada dəyişin
  password: "300793mm", // MySQL şifrənizi burada dəyişin
  database: "students", // MySQL verilənlər bazasının adını burada dəyişin
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL serverə qoşulma mümkün olmadı: " + err.stack);
    return;
  }
  console.log(
    "MySQL serverə uğurla qoşuldunuz, connection id " + connection.threadId
  );
});

app.get("/", (req, res) => {
  res.send("<h1>users: /users </h1>");
  //   res.redirect("/users");
});
// get all
app.get("/users", (req, res) => {
  // MySQL'dən bütün məlumatları almaq üçün sorğu
  const sql = "SELECT * FROM students";

  // Sorğunu icra etmək
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Sorğu icra olunarkən səhv: " + err.stack);
      res.status(500).send("Server səhvi baş verdi");
      return;
    }

    // Sorğu uğurla icra olundu, nəticələri göndər
    res.status(200).json(results);
  });
});
// get by id

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const sql = `SELECT * FROM students where id=${id}`;

  // Sorğunu icra etmək
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Sorğu icra olunarkən səhv: " + err.stack);
      res.status(500).send("Server səhvi baş verdi");
      return;
    }
    // Sorğu uğurla icra olundu, nəticələri göndər
    res.status(200).json(results);
  });
});

// // delete by id
// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const user = db.find((user) => user.id == id);
//   if (user) {
//     const arr = db.filter((user) => user.id != id);

//     res.status(200).send(arr);
//   } else {
//     res.status(404).send({
//       status: 404,
//       message: " bele bir user yoxdur",
//     });
//   }
// });

// // post
// app.post("/users/", (req, res) => {
//   console.log(req.body);
//   let obj = req.body;

//   // 0 false undefine null ""

//   if (!obj.name) {
//     res.status(400).send({ message: "ad daxil edilmeyib" });
//   }
//   if (!obj.age) {
//     res.status(400).send({ message: "yase daxil edilmeyib" });
//   }

//   obj.id = uuidv4();

//   db.push(obj);
//   res.status(200).send({ message: "succes", data: db });
// });

// //patch
// app.patch("/users/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(req.body);
//   let obj = req.body;

//   let user = db.find((elem) => elem.id == id);
//   for (let key in obj) {
//     user[key] ? (user[key] = obj[key]) : null;
//   }

//   res.status(200).send({ message: "succes", data: db });
// });

// //put
// app.put("/users/:id", (req, res) => {
//   const { id } = req.params;
//   let obj = req.body;

//   let arr = db.filter((user) => user.id != id);

//   arr = [...arr, { id: +id, ...obj }];

//   res.status(200).send({ message: "succes", data: arr });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
