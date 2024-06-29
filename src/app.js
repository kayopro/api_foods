const express = require("express");
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodRouter");
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
mongoose.connect("mongodb+srv://usarApp:s4ads123@aulaweb.aefv2ko.mongodb.net", {
  retryWrites: true,
  w: "majority",
  appName: "AulaWeb",
});

app.use("/api", foodRoutes);

app.listen(port, () => {
  console.log(`Server is runnig on https://localhost/${port}`);
});
