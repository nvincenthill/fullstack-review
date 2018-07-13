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
    handleDatabaseWrite(data);
  });

  res.send(req.body);
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  handleDatabaseRead();
});

handleDatabaseRead = () => {
  console.log("talking to the mongoose");
};

handleDatabaseWrite = data => {
  console.log("writing to the mongoose");
  console.log(data.length);
  for (let i = 0; i < data.length; i++) {
    db.save(data[i]);
  }
};

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
