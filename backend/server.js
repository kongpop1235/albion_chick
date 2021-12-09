const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ result: "Chicken", message: "1234" });
});

app.listen(3000, () => {
  console.log("Chicken is runing..");
});