'use strict';

// A static server using Node and Express
const express = require("express");
const app = express();

// instead of older body-parser 
app.use(express.json());

// make all the files in 'public' available on the Web
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

// -------------------------------------------------



// -------------------------------------------------

// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("The static server is listening on port " + listener.address().port);
});
