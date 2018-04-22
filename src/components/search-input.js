import React, { Component } from 'react';

import './search-input.css';

class SearchInput extends Component {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input
            onChange={this.handleChange}
            placeholder="Поиск по фильму, жанру, актерам..."
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;