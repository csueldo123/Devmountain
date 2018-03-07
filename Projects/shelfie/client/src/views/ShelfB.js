import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

class ShelfB extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <div className="shelfie-header">
            <h1 className="App-title">Shelf B</h1>
          </div>
        </header>
        <div className="main-content-container">
          <div className="home-shelfs">Bin 1</div>
          <div className="home-shelfs">Bin 2</div>
          <div className="home-shelfs">Bin 3</div>
          <div className="home-shelfs">Bin 4</div>
          <button className="home-shelfs">+ Inventory</button>
          
        </div>
      </div>
    );
  }
}

export default ShelfB;