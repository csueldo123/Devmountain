import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import axios from 'axios';

import '../App.css';

class Home extends Component {
  render() {
    
    return (
      <div className="App">
        <div className="main-content-container">
          <div className="home-shelfs" >
            <Link to="/shelf-a" className='links'> <button className="btn">Shelf A</button></Link>
          </div>
          <div className="home-shelfs">
            <Link to="/shelf-a" className='links'> <button className="btn">Shelf A</button></Link>
          </div>
          <div className="home-shelfs">
            <Link to="/shelf-a" className='links'> <button className="btn">Shelf A</button></Link>
          </div>
          <div className="home-shelfs">
            <Link to="/shelf-a" className='links'> <button className="btn">Shelf A</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;