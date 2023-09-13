const express = require("express");

const app = express();

app.get("/:leadId", (req, res) => {
  const { leadId } = req.params;
  console.log("request recieved for lead", leadId);
  res.redirect(`tapanalytics://leads/${leadId}`);
});

app.listen(3000, () => {
  console.log("Listening on port", 3000);
});
