import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      load: []
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

//-----------------methods---------

componentWillMount(){
  axios
    .get('/api/hello')
    //this is where we are telling to GET the data from. So its going to /api/hello and pulling server.js data. 
    .then((res) =>{
      this.setState({
        load: res.data,
      }) 
    })
}

addItem(e){
  e.preventDefault();
  let data = {
    string: this.refs.newItem.value,
  }
  console.log(data)

  axios
    .put('/api/update', data)
    .then((res) =>{
      this.setState({
        load: res.data
      })
    })
    //clears input box
    this.refs.newItem.value = ""
}

deleteItem(){
  axios
    .delete('/api/delete?id=1')
    .then((res)=>{
      this.setState({
        load: res.data
      })
    })
}


//----------------------render React Dom -----------------

  render() {
    const divs = this.state.load.map((element, i)=>{
      return <div key ={i}>{element}</div>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.addItem}/>
        <input type="text" ref="newItem"/>
        <button onClick={this.addItem}>Add Item</button>
        {divs}
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    );
  }
}

export default App;

//in my package.json i added "proxy": "http://localhost:8000", that is why my axios.get( is only '/api/hello') instead of the whole localhost://...