import React, { Component } from 'react';
import calculatorImg from '../../calculator.png';

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            header : "Calculator",

        }
    }

    updateHeader( val ) {
        this.setState(
            {
                header: val,
            }
        )
    }

    render(){
        return(
        <div id="calculator-container">

            {/* e in the arrow function refers to the ELEMENT NOT the value you are passing through. So the arrow function is saying (e) or (input element) invoke method "update Header" and return something. To know what to pass through to the method, (e.target.value) means (input element.target this.value given) */ }
            <input id="header-input" onChange={ ( e ) => this.updateHeader( e.target.value ) } />

            {/* this.state.header is saying: (this) look in the Calc component and find (.state) Object and in that obj find property called (header) */}
            <h1 id="header"> { this.state.header } </h1>
            
            <img className="remove-highlight" src={calculatorImg} alt="calculator" />
            <div id="calculator-mask" className="remove-highlight">
              <div className="output">
                <span className="total"></span>
              </div>
        
              <div className="btn clear"></div>
        
              <div className="btn zero"></div>
              <div className="btn one"></div>
              <div className="btn two"></div>
              <div className="btn three"></div>
              <div className="btn four"></div>
              <div className="btn five"></div>
              <div className="btn six"></div>
              <div className="btn seven"></div>
              <div className="btn eight"></div>
              <div className="btn nine"></div>
        
              <div className="btn equal"></div>
              <div className="btn multiply"></div>
              <div className="btn divide"></div>
              <div className="btn subtract"></div>
              <div className="btn add"></div>
            </div>
        </div>
        );
    }
}

export default Calculator;