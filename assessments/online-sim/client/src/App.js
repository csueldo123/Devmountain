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

// ----------------------------METHODS--------------------------

  getWeather( event ){
    //makes the page not refresh by default form
    //debugger
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
        [ event.target.name ]: event.target.value.toUpperCase()
      
    }) 
  }

  //-----------------------END METHODS----------------------------

  render() {

    let cities = this.state.cities.map( ( city, i ) => {

      return <h1 key= { i }>{ city.toUpperCase() }</h1>

    })

    let cards = this.state.forcast.map( ( e, i ) => {
      if( i < 5 ){
        return (
          <Card
            key = { i }
            day = { e.date.weekday }
            conditions = { e.conditions }
            high = { e.high.fahrenheit }
            low = { e.low.fahrenheit }
            icon = { e.icon_url }
          />
        )
      }
      return <div></div>
    })

    return (

      <div className="App">

        <header className="App-header">
          <h1 className="App-title"> &lt;DevWeather&nbsp;/&gt; </h1>
        </header>

          {/* ---------------------FORM SECTION-------------------------*/}

        <form onSubmit={ this.getWeather } className="form-group">

          <input 
            className="search-city" 
            type="text"
            placeholder="City"
            name = "city"
            value = { this.state.city }
            onChange = { this.handleChange }
          >
          </input>

          <br></br>

          <select onChange = { this.handleChange } name= "state">
              <option value="">Select A State</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
          </select>

          <br></br>

          <button 
            className="weather-btn"
            type="submit" 
            value="Get Weather"
          >
            Get Weather
          </button>

        </form>

          {/* ----------------END FORM SECTION-------------------- */}

        { 
          this.state.forcast.length > 0 ? 

        <div>
          <h1>5 Day Forecast</h1>

          <div className="card-container">
            {cards}
          </div>
        </div>

        : 

        <div>
          <h1>Enter City</h1>
          <div className="card-container"></div> 
        </div>

        }

        <h1>Recent Searches</h1>
        <div className="recent-cities-container">
          {cities}
        </div>

      </div>
    );
  }
}

export default App;
