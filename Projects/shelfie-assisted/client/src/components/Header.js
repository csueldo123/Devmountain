import React, { Component } from 'react';
import logo from '../assets/Shelf_Logo.png';
import {Link} from 'react-router-dom';



import '../App.css';

class Header extends Component {
  render() {
    if(this.props.shelf){
      return(
        <div className="FullHeader">
          <Link className="Home" to={"/"}>
              <img src={logo} alt=""/>
          </Link>
          <Link to={`/bins/${this.props.bin.params.shelf}`}>
          <div className="Shelf">
            {`Shelf ${this.props.shelf}`}
          </div>
          </Link>
          <div>
            {/* {this.props.isAdd !== null ? `Bin ${this.props.bin.params.bin}`: `Add to Bin ${this.props} */}
          </div>
        </div>

      )

    }else if(this.props.shelf){
      return (
        <div className="Header">
          <img src={logo} alt="logo"/>
          <p>SHELFIE</p>
        </div>
    );
  }
  }
}

export default Header;