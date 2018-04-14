import React, { Component } from 'react';
import Header from '../Header/Header.js';
import axios from 'axios';
import {Link} from 'react-router-dom';


import './Shelf.css';

class Shelf extends Component {
    constructor(props){
        super(props)
        this.state = {
            bins: [],
        }
    }
    componentDidMount(){
        axios
            .get(`/api/bins/${this.props.match.params.shelf}`)
            .then((response)=>{
                // console.log(response)
                this.setState({
                    bins: response.data
                })
            })
    }
  render() {
    const bins = this.state.bins.map((bin)=>{
        if(bin.name){
            return(
                <div className="BinButton" key={bin.id}>
                    <Link to={`/bin/${bin.shelf}${bin.bin}`}>
                        <div className="BinButton-Link">
                            Bin {bin.bin}
                        </div>
                    </Link>
                </div>
            );
        }else{
            return(
                <div className="BinButtonAdd" key={bin.id}>
                    <Link to={`/bin/${bin.shelf}${bin.bin}`}>                
                        <div className="BinButton-Link">+ Inventory To Bin</div>
                    </Link>  
                </div>
            )
        }
    })
    return (
      <div>
        <Header shelf={this.props.match.params.shelf}/>
        {bins}
      </div>
    );
  }
}

export default Shelf;