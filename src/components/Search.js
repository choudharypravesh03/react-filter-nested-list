import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Search
        </button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim();
    this.props.onSearchClick(text);
    node.value = '';
  }
}

Search.pTypes = {
    onSearchClick: PropTypes.func.isRequired
};
