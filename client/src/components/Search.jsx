import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div>
        <h4>Add more repos!</h4>
        Enter a github username:{" "}
        <input
          value={this.state.terms}
          onChange={event => this.onChange(event)}
        />
        <button onClick={() => this.search()}> ADD </button>
      </div>
    );
  }
}

export default Search;
