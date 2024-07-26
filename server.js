const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Hello... Welcome to our hotel");
});



const personRoutes= require('./routes/personRoutes');
app.use('/person', personRoutes);
const menuRoutes= require('./routes/menuItemRoutes');
app.use('/menuitem', menuRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
