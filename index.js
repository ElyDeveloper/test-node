const express = require("express");

const bodyParse = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.get("/", (req, res) => {
  res.status(200).send({msg: "Hello World"});
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});