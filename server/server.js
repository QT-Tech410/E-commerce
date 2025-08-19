process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const initRoutes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
const port = process.env.PORT || 8888;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
initRoutes(app);

app.use("/", (req, res) => {
  res.send("SERVER ONNNNNNN");
});

app.listen(port, () => {
  console.log("Server runing on the port: " + port);
});
