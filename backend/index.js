const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const { chatRoutes } = require("./routes/ChatRoutes");
const { sendGridRoute } = require("./routes/SendgridRoute");

app.use(express.json());
app.use(cors());

chatRoutes(app);
sendGridRoute(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
