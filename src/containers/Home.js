import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from '../components/Home';
import { pushState } from 'redux-router';

class Home extends Component {

  render() {
    const { dispatch, emojiHeader, menuState, getState } = this.props;

    return (
      <div>
        <HomeComponent />
      </div>
    );
  }
}

Home.PropTypes = {};


function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Home);
