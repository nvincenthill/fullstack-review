// TODO: sort repos by createdAt
// TODO: don't store duplicates to DB

import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";
import "./styles/main.css";

const domain = process.env.DOMAIN || "https://localhost:";
const port = process.env.PORT || "1128";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };

    this.updateRepos = this.updateRepos.bind(this);
    this.getData = this.getData.bind(this);
  }

  search(term) {
    // Make POST reqest with search term
    let searchData = JSON.stringify({ searchTerm: term });
    const endpoint = "/repos";
    this.postData(domain + port + endpoint, searchData)
      .then(data => console.log(data)) // JSON from `response.json()` call
      .catch(error => console.error(error));
    setTimeout(() => {
      this.getData();
    }, 2000);
  }

  postData(url = ``, data = {}) {
    // Default options are marked with *
    // console.log(data, typeof data);
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: data // body data type must match "Content-Type" header
    })
      .then(response => {
        console.log(response);
        response.json();
      }) // parses response to JSON
      .catch(error => console.error(`Fetch Error =\n`, error));
  }

  getData() {
    console.log(process.env);
    let self = this;
    const endpoint = "/repos";
    fetch(domain + port + endpoint)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        self.updateRepos(myJson);
      });
  }

  updateRepos(data) {
    this.setState({ repos: data });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h1 id="title">
          <span className="red">GIT</span>REPOS.IO
        </h1>
        <Search onSearch={this.search.bind(this)} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
