import React from "react";

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="repo">
        <a href={this.props.repo.url} target="_blank">
          <h1>{this.props.repo.name}</h1>{" "}
        </a>
        <h2>{this.props.repo.description}</h2>

        <p>Number of forks: {this.props.repo.forks}</p>
      </div>
    );
  }
}

export default Repo;
