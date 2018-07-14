import React from "react";
import Repo from "./Repo.jsx";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let unsorted = this.props.repos.slice();
    let sorted = unsorted.sort((a, b) => Date(b.createdAt) - Date(a.createdAt));
    let repos = sorted.map((item, index) => {
      return <Repo key={index} repo={item} />;
    });
    return (
      <div>
        <p>Displaying {this.props.repos.length} repos</p>
        {repos}
      </div>
    );
  }
}

export default RepoList;
