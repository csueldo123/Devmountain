import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Everything is going to render below this h1 header</h1>
        <div className="main-container">
          <div className="left-side">
            <p className="page">
              This left side will stay the same
            </p>
          </div>
          <div className="right-side">
            <Router>
              <Switch>
                <Route path='/page1' component={ Page1 } />
                <Route path='/page2' component={ Page2 } />       
                <Route path='/page3' component={ Page3 } />       
                <Route path='/page4' component={ Page4 } />       
              </Switch>
          </Router>
          </div>
        </div>

      </div>

    );
  }
}

export default App;


//-------SETTING UP REACT-ROUTER
//npm i --save react-router-dom
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; on App.js
//         
{/* 
<Router>
<Switch>
<Route path='' component={ } />    
</Switch>
</Router> 
*/}
// on App.js
//
// import { Link } from 'react-router-dom';
//
// <Link to=''> log in <Link>


