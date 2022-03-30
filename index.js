// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const app = express();

// middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(methodOverride("_method"))

app.use(express.urlencoded({ extended: true }));
// controllers
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(49115, () => {
  console.log("listening on port 3002");
});
