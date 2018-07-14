const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

// if (process.env.ENVIRONMENT === "dev") {
// const config = require("../config.js");
// }

console.log(
  `mongodb://${process.env.DBUSERNAME}:${
    process.env.DBPASSWORD
  }@ds135441.mlab.com:35441/nvincenthillfetcher`
);

mongoose.connect(
  `mongodb://${process.env.DBUSERNAME}:${
    process.env.DBPASSWORD
  }@ds135441.mlab.com:35441/nvincenthillfetcher`
);

let repoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  description: String,
  url: String,
  forks: Number
});

repoSchema.plugin(timestamps);

let Repo = mongoose.model("Repo", repoSchema);

let save = githubData => {
  if (githubData !== undefined) {
    var newDocument = new Repo({
      id: githubData.id,
      name: githubData.name,
      description: githubData.description,
      url: githubData.html_url,
      forks: githubData.forks
    });
    newDocument.save(function(err) {
      if (err) return console.error(err);
    });
  }
};

read = cb => {
  // Repo.find().sort({ datefield: -1 }, function(err, cursor) {});
  Repo.find(function(err, data) {
    if (err) return console.error(err);
    // console.log(data);
    cb(data);
  });
};

module.exports.save = save;
module.exports.read = read;
