const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 9000;
const url =
  "mongodb+srv://mirza:mirza095@cluster0.xdm7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
app.use(express.json());
try {
  con.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

const studentrouter = require("./routes/students");
app.use("/students", studentrouter);

app.listen(port, () => {
  console.log("Server started");
});
