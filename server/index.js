const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/route");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
mongoose
  .connect(
    "mongodb+srv://gur:gur123456@nodetuts.mx3oj.mongodb.net/contacts?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => console.log("listening at " + 4000));
  });

app.use(router);
