import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    const { state, children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);
