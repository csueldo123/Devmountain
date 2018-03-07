import React, { Component } from 'react';
import Header from 'Header.js';
import axios from 'axios';


import '../App.css';

class Bin extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEdit: false,
      name:null,
      price: 0,
      image:'',
      buttonText: 'EDIT',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount(){
    axios
      .get(`/api/bin/${this.props.match.params.shelf}${this.props.match.params.bin}`)
      .then((bin)=>{
          bin.data.isEdit = bin.data.name ? true : false;
          bin.data.isEdit = "Edit"
          this.setState(bin.data)
      })
  }

  handleDelete(){
    axios
      .delete(`/api/bin/${this.props.match.params.shelf}${this.props.match.params.bin}`)
      .then(()=>{
        this.props.history.goBack();
      })
  }
  handleClick(){

  }
  handleSave(){
    if(this.state.buttonText){
      this.setState({
        buttonText: 'Save'
      })
    }else{
          axios
            .put(`/api/bin/${this.props.match.params.shelf}${this.props.match.params.bin}`, {
              name: this.state.name,
              price: this.state.price,
            })
            .then((bin)=>{
              if(this.state.isEdit){
                this.props.history.goBack();
              }else{
                bin.data.isEdit = this.state.isEdit;
                bin.data.isEdit = "Edit"
                this.setState(bin.data)
              }
            })
    }
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    let input;
    if(this.state.isEdit){
      input = (
        <div className="binContainer">
          <img src={this.state.image} alt=""/>

          <div>
          <label>Name</label>
          <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/>
          <label>Price</label>
          <input onChange={this.handleChange} name="price" type="text" value={this.state.price}/>
          </div>
          <button>{this.state.buttonText}</button>
          <button>DELETE</button>
        </div>
      )
    }else {
      input =(
          <div className="binContainer">
            <img src={this.state.image} alt=""/>
  
            <div>
            <label>Name</label>
            <input type="text" value={this.state.name}/>
            <label>Price</label>
            <input type="text" value={this.state.price}/>
            </div>
            <button>{this.state.buttonText}</button>
            <button>+ Add to Inventory</button>
          </div>
      )
    }
    return (
      <div>
        <Header isAdd={this.state.name} bin={this.props.match}/>
      </div>
    );
  }
}

export default Bin;