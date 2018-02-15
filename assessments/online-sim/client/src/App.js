import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      forcast: [],
      cities: [],
      state: '',
      city: ''

    }
    this.handleChange = this.handleChange.bind(this)
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather( event ){
    //makes the page not refresh by default form
    debugger
    event.preventDefault()
    axios
      .get(`/search/?state=${ this.state.state }&city=${ this.state.city }`)
      .then((res) => {
        console.log('search res', res)
        this.setState({
          forcast: res.data.response,
          cities: res.data.cities 
        })
      })


  }

  handleChange( event ){
      this.setState( { 
        [ event.target.name ]: event.target.value 
      
    }) 
  }

  render() {

      let cities = this.state.cities.map((city) =>{
        return <p>{city}</p>
      })

      let cards = this.state.forcast.map( (e, i) =>{
        if(i< 5){
          return <Card
          key = {i}
          day = {e.date.weekday}
          conditions = {e.conditions}
          high = {e.high.fahrenheit}
          low = {e.low.fahrenheit}
          icon = {e.icon_url}
          />
        }
       })

    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> DevWeather </h1>
        </header>
          
          <form onSubmit={this.getWeather} className="form-group">
            <input className="search-city" 
            type="text"
            placeholder="city"
            name = "city"
            value = { this.state.city } 
            onChange = { this.handleChange}
            ></input>

            <br></br>

            <select onChange = { this.handleChange } name= "state">
              <option value="">Select A State</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
            </select>

            <br></br>

            <input 
              type="submit" 
              value="Get Weather"
             
              ></input>
          </form>


        <h2>Enter City</h2>

        <div>
          {cards}
        </div>
  
        <h2>Recent Searches</h2>
        {cities}
      </div>
    );
  }
}

export default App;
