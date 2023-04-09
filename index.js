// const express = require("express");

// const bodyParse = require("body-parser");

// const app = express();
// const PORT = 3000;

// app.use(bodyParse.urlencoded({ extended: false }));
// app.use(bodyParse.json());

// app.get("/", (req, res) => {

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World!");
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});