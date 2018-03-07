import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import axios from 'axios';

import '../App.css';

class ShelfA extends Component {
  constructor(){
    this.state = {
      id: null,
      shelf: "",
      bin: "",
      name: null,
      price: null,
      image: null
    }
  }
  render() {
    
    
    componentDidMount(
      axios
        .get(`https://localhost:6060/api/getbins/a`)
        .then((res) =>{
          this.setState({
            id: res.data.id,
            shelf: res.data.shelf,
            bin: res.data.bin,
            name: res.data.name,
            price: res.data.price,
            image: res.data.image
          })
        })

    )
    return (
      <div className="App">
        <div className="main-content-container">
          <Link to="/bin1" className='links'><button className="btn">Bin 1</button></Link>
          <button className="btn">Bin 2</button>
          <button className="btn">Bin 3</button>
          <button className="btn">Bin 4</button>
          <button className="btn">+ Inventory</button>
        </div>
      </div>
    );
  }
}

export default ShelfA;