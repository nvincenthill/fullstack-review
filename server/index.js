// const dotenv = require("dotenv");

// const result = dotenv.config();

// if (result.error) {
//   throw result.error;
// }

// console.log(result.parsed);

const express = require("express");
const parser = require("body-parser");
const getRepos = require("../helpers/github");
const db = require("../database/index.js");
let app = express();

// parse application/json
app.use(parser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function(req, res) {
  // This route should take the github username provided
  // console.log(req.body, typeof req.body);
  // and get the repo information from the github API, then
  let searchTerm = req.body.searchTerm;

  getRepos.getReposByUsername(searchTerm, data => {
    // save the repo information in the database
    // console.log(data);
    handleDatabaseWrite(data);
    res.send(req.body);
  });
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  handleDatabaseRead(data => {
    res.send(data);
  });
});

handleDatabaseRead = callback => {
  console.log("mongoose reads to me");
  db.read(data => {
    callback(data);
  });
};

handleDatabaseWrite = data => {
  console.log("writing to the mongoose");
  for (let i = 0; i < data.length; i++) {
    db.save(data[i]);
  }
};

let port = process.env.DBPORT || 1280;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
