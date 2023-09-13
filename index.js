const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("request recieved");
  res.redirect("tapanalytics://leads/430");
});

app.listen(3000, () => {
  console.log("Listening on port", 3000);
});
