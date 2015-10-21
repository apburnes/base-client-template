import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className=''>
        yo
      </div>
    );
  }
}

Header.PropTypes = {
  onChangeIconClick: PropTypes.func.isRequired,
  emoji: PropTypes.object.isRequired
};
