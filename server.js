// require packages here
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// local host
const PORT = 3000;

// express inside of variable
const app = express();

app.use(logger("dev"));

// setting up middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting root to public
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budgetdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

// shows what port app is assigned to
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
