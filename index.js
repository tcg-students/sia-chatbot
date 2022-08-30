const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const {chatRoutes} = require('./routes/ChatRoutes')
const {sendGridRoute} = require('./routes/SendgridRoute')
const reactAppJson = require("./public/build/asset-manifest.json");
const helmet = require('helmet');
const compression = require('compression');


const path = require('path');




if (process.env.NODE_ENV === "production") {
    //   app.use(express.static(path.join(__dirname, 'client/build')));
    app.use(express.static('frontend/build'));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
    })
  }

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

  

app.use(express.json())
app.use(cors())
app.use(helmet());
app.use(compression());
chatRoutes(app)
sendGridRoute(app)
app.listen(process.env.PORT || 4004, () => console.log(`Example app listening on port ${process.env.PORT}!`))