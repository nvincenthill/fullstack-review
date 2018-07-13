import React from "react";
import Repo from "./Repo.jsx";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let repos = this.props.repos.map((item, index) => {
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
