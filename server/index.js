const express = require("express");
const parser = require("body-parser");
let app = express();

// parse application/json
app.use(parser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.post("/repos", function(req, res) {
  // This route should take the github username provided
  console.log(req.body, typeof req.body);
  // and get the repo information from the github API, then
  let repos = getRepos(searchTerm);
  // save the repo information in the database
  handleDatabaseWrite(repos);
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
  console.log("writing to the mongoose", data);
};

getRepos = searchTerm => {
  console.log("talking to the mongoose");
};

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
