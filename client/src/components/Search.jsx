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
        <input
          value={this.state.terms}
          onChange={event => this.onChange(event)}
          placeholder="Github username"
        />
        <button onClick={() => this.search()}> ADD </button>
      </div>
    );
  }
}

export default Search;
