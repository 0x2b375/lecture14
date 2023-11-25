let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
// Express Route
const studentRoute = require("../backend/routes/student.route");
// Connecting mongoDB Database
mongoose.connect("mongodb+srv://sanityseclipse6:Zerotwo02@lecture14.t2avpmf.mongodb.net/?retryWrites=true&w=majority").then((x) => {
  console.log("Connected to database");
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/students", studentRoute);
// Listening to port
app.listen(4000, () => {
  console.log("Connected to port");
});
