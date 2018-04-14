import React, { Component } from 'react';
import Header from '../Header/Header.js';
import {Link} from 'react-router-dom';


import './Home.css';

class Home extends Component {
  render() {
    const shelfArr = ['A', 'B', 'C', 'D'];
    const shelves = shelfArr.map((shelf, i)=>{
        return(
            <div key={i} className="ShelfButton">

            <Link to={`/bins/${shelf}`}>
                <div className="ShelfButton-Link">
                    {`Shelf ${shelf}`}
                </div>
            </Link>

            </div>
        )
    })
    return (
      <div>
        <Header />
        {shelves}
      </div>
    );
  }
}

export default Home;