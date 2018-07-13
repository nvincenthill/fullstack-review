const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

let repoSchema = mongoose.Schema({
  name: String,
  description: String,
  url: String,
  forks: Number
});

let Repo = mongoose.model("Repo", repoSchema);

let save = githubData => {
  // This function should save a repo or repos to
  // the MongoDB
  console.log(githubData.name);
  var newDocument = new Repo({
    name: githubData.name,
    description: githubData.description,
    url: githubData.url,
    forks: githubData.forks
  });
  newDocument.save(function(err) {
    if (err) return console.error(err);
  });
};

module.exports.save = save;
