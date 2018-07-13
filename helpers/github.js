const request = require("request");
const config = require("../config.js");

// Request repos for a specific
// user from the github API

let getReposByUsername = (searchTerm, cb) => {
  console.log("getting repos named", searchTerm);

  let options = {
    url: `https://api.github.com/users/${searchTerm}/repos`,
    headers: {
      "User-Agent": "request",
      Authorization: `token ${config.TOKEN}`
    }
  };

  callback = (error, response, body) => {
    if (error) {
      console.log("ERROR ", error);
    }
    if (!error && response.statusCode == 200) {
      cb(JSON.parse(body));
    }
  };

  console.log("requesting from github API");
  request(options, callback);
};

module.exports.getReposByUsername = getReposByUsername;
