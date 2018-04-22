import React, { Component } from 'react';

import './search-input.css';

class MyList extends Component {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
        </div>
      </div>
    );
  }
}

export default MyList;