import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

import '../App.css';

class Header extends Component {
  render() {
    
    return (
      <div>
        <header className="App-header">
          <div className="shelfie-header">
            <h1 className="App-title">SHELFIE</h1>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;