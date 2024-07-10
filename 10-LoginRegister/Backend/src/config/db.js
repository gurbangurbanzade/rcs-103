const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://gurban:12345rcs103@cluster0.mnkshpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
