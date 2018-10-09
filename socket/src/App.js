import React, { Component } from 'react';
import './App.css';
import { sendMessage } from './api';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      msg: '',
      messages: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    socket.on('Send Message', (msg)=>{
      this.setState({
        messages:[...this.state.messages, msg]
      })
    })
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
                
    handleSubmit(event){
      event.preventDefault();
      sendMessage(this.state.msg);
        this.setState({
          msg: '',
      })
   }

  render() {
    const messages = this.state.messages.map((msg, i)=>{
      return <p key={i}>{msg}</p>
    })
    return (
      <div className="App">
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="msg" value={this.state.msg} type="text"/>
          <br/>
          <button>Send</button>
        </form>
        <br/>
        <br/>
        <br/>
        <br/>
        {messages}
      </div>
    );
  }
}


export default App;
