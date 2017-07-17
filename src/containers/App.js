import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions';
import Search from '../components/Search';
import TreeView from '../components/TreeView';

class App extends Component {
  render() {
    const { dispatch, visibleList } = this.props;
    return (
      <div>
        <h1>React Test</h1>
        <Search
          onSearchClick={text =>
            dispatch(search(text))
          } />
        <TreeView
          list={visibleList}
        />
      </div>
    );
  }
}

function filterList(list) {
    return list;
}


function select(state) {
  return {
    visibleList: filterList(state.filterList),
    visibilityFilter: state.visibilityFilter
  };
}


export default connect(select)(App);