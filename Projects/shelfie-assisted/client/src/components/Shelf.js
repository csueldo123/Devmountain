import React, { Component } from 'react';
import Header from './Header.js';
import axios from 'axios';
import {Link} from 'react-router-dom';


import '../App.css';

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
    const bins = this.state.map((bin, i)=>{
        if(bin.name){
            return(
                    <Link key={bin.id} to={`/bin/${bin.shelf}${bin.bin}`}>
                    <div className="BinButton">
                        Bin {bin.bin}
                    </div>
                     </Link>
            );
        }else{
            return(
                    <Link key={bin.id} to={`/bin/${bin.shelf}${bin.bin}`}>                
                    <div className="BinButtonAdd">+ Inventory To Bin</div>
                    </Link>
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