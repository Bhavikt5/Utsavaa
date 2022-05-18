const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Config
if (process.env.NODE_env !== "PRODUCTION") {
  require("dotenv").config({ path: "Backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

// Route Imports
const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../Frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
