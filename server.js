//Get express as a variable
const express = require("express");
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://twg:1234@cluster0.bf1aurw.mongodb.net/Node-API?retryWrites=true&w=majority";

//Controllers
const productController = require("./controllers/productController");

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to the MongoDb");

    //listening to the port number
    app.listen(port, () => {
      console.log(`App is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//get express variable as a function and assign to a variable
const app = express();

//Get the web Server port. If doesn't exist a port in the server ,will get the manual define port number
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/products/", productController);
