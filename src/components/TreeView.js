import React, { Component, PropTypes } from 'react';
import Item from './Item';

export default class TreeView extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((list, index) =>
          <Item {...list}
                key={index}
          />
        )}
      </ul>
    );
  }
}

TreeView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};