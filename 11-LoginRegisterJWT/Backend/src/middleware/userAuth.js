var jwt = require("jsonwebtoken");
const users = require("./../controllers/userControllers");

const userAuth = async (req, res, next) => {
  console.log(req.headers.authorization, "req.body");

  const result = req.headers.authorization.split(" ")[1];
  const refreshTKN = req.headers.authorization.split(" ")[2];
  console.log(refreshTKN, "refreshTKN");

  const token = jwt.verify(result, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      console.log(users.db);
      const findToken = users.db.find((item) => item === refreshTKN);
      if (!findToken) {
        res.status(200).send("salam");
        return next();
      }
      // console.log(err, "err");
      // return res.status(404).send({
      //   message: "token yalnisdir",
      // });
    } else {
      console.log("token kecerlidir");

      return next();
    }
  });

  // const { name, password } = req.body;
  // if (!name || !password) {
  //   return res.status(404).send({ message: "name ve ya password yalnisdir" });
  // }
  // return next();
};

module.exports = userAuth;

`=?`;
