import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/Shelf_Logo.png';

import './Header.css';

const Header = (props) => {
  if(props.bin){
    return(
      <div className="BinHeader">
        <div className="Bin-Img-Container">
          <div className="img">
            <Link to={`/`}>
              <img src={logo} alt=""/>
            </Link>
          </div>
        </div>

        <div className="BinShelf">
          <Link to={`/bins/${props.bin.params.shelf}`}>
            <div>
              {`Shelf ${props.bin.params.shelf.toUpperCase()}`}
            </div>
          </Link>
        </div>

        <div className="Bin">
          <div className="Bin-Title">
            {props.isAdd ? `Bin ${props.bin.params.bin}`: `Add to Bin ${props.bin.params.bin}`}
          </div>
        </div>

      </div>
    )

  }
  else if(props.shelf){
    return(
      <div className="ShelfHeader">
        <div className="Shelf-Img-Container">
          <div className="img">
            <Link to='/'>
              <img src={logo} alt=""/>
            </Link>
          </div>
        </div>
        <div className="Shelf-Header-Title">
          {`Shelf ${props.shelf.toUpperCase()}`}
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="HeaderHome">
        <div className="header-container">
          <img src={logo} alt="logo"/>
          <p>SHELFIE</p>
        </div>
      </div>
    );
  }
}

export default Header;