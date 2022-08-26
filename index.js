const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const { chatRoutes } = require("./routes/ChatRoutes");
const { sendGridRoute } = require("./routes/SendgridRoute");
const path = require("path");
const reactAppJson = require("./public/build/asset-manifest.json");

app.use(express.json());
app.use(cors());

chatRoutes(app);
sendGridRoute(app);

app.get("/bot", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/main.js"));
});

app.get("/bot-box/main", function (req, res) {
  var mainJs = reactAppJson["files"]["main.js"];
  res.sendFile(path.join(__dirname, "/public/build" + mainJs));
});

app.get("/bot-box/css", function (req, res) {
  var mainCss = reactAppJson["files"]["main.css"];
  res.sendFile(path.join(__dirname, "/public/build" + mainCss));
});


if (process.env.NODE_ENV === "production") {
  //   app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static('frontend/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
  })
}

app.listen(port, () => console.log(`Example app listening on port ${4004}!`));
