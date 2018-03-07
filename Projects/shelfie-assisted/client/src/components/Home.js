import React, { Component } from 'react';
import {Link} from 'react-router-dom';



import '../App.css';

class Home extends Component {
  render() {
    const shelfArr = ['A', 'B', 'C', 'D'];
    const shelves = shelfArr.map((shelf, i)=>{
        return(
            <div key={i}>

            <Link to={`/bins/${shelf}`}>
                <div className="shelfButton">
                    {`Shelf ${shelf}`}
                </div>
            </Link>

            </div>
        )
    })
    return (
      <div>
        {shelves}
      </div>
    );
  }
}

export default Home;