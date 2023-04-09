const express = require("express");

const bodyParse = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.get("/", (req, res) => {

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});