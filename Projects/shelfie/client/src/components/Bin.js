import React, { Component } from 'react';
import axios from 'axios';

import '../App.css';

class Bin extends Component {
  render() {
    
    return (
      <div className="bin-main">
        <div className="bin-left-container">
            <img src="" alt="IMAGE"/>
        </div>
        <div className="bin-right-container">
            <h3>Name</h3>
            <input type="text" placeholder="Name"/>
            <h3>Price</h3>
            <input type="text" placeholder="Price"/>
            <br></br>
            <button className="btn-edit">EDIT</button>
            <button className="btn-delete">DELETE</button>
        </div>
      </div>
    );
  }
}

export default Bin;