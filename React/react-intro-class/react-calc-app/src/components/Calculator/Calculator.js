import React, { Component } from 'react';
import calculatorImg from '../../calculator.png';

class Calculator extends Component {
    constructor(){
        super();

        this.state = {
            header : "Calculator",
            display : "0",
            operator : "",
            temp : 0,
            resetDisplay : false,
        }
    }

    updateHeader( val ) {
        this.setState(
            {
                header: val,
            }
        )
    }

    setDisplay( num ) {
        // let display = ( this.state.display === '0' ) ? num : this.state.display + num;
        let display;
        if( this.state.display === "0"){
            display = num;
        }
        else{
            display = this.state.display + num;
        }
        this.setState(
            {
                display: ( this.state.display.length < 13 ) ? display : this.state.display,
            }
        )
    }

    setOperator( op ){
        if(op === ""){
            op = "";
        }
        else {
            this.setState(
                {
                    operator : op,
                }
            )
        }
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
              {/* (this.state.display) check the this component method for state obj and find property value "display" */}
                <span className="total"> { this.state.display } </span>
              </div>
        
              <div className="btn clear"></div>
                {/* ( this arrow function doesnt have (e) because we arent passing in an event, its just a click and we want it to invoke a function setDisplay.) */}
              <div className="btn zero" onClick={ () => this.setDisplay( "0" ) }></div>
              <div className="btn one" onClick={ () => this.setDisplay( "1" ) }></div>
              <div className="btn two" onClick={ () => this.setDisplay( "2" ) }></div>
              <div className="btn three" onClick={ () => this.setDisplay( "3" ) }></div>
              <div className="btn four" onClick={ () => this.setDisplay( "4" ) }></div>
              <div className="btn five" onClick={ () => this.setDisplay( "5" ) }></div>
              <div className="btn six" onClick={ () => this.setDisplay( "6" ) }></div>
              <div className="btn seven" onClick={ () => this.setDisplay( "7" ) }></div>
              <div className="btn eight" onClick={ () => this.setDisplay( "8" ) }></div>
              <div className="btn nine" onClick={ () => this.setDisplay( "9" ) }></div>
        
              <div className="btn equal" onClick={ () => this.setOperator( "=" ) }></div>
              <div className="btn multiply" onClick={ () => this.setOperator( "*" ) }></div>
              <div className="btn divide" onClick={ () => this.setOperator( "/" ) }></div>
              <div className="btn subtract" onClick={ () => this.setOperator( "-" ) }></div>
              <div className="btn add" onClick={ () => this.setOperator( "+" ) }></div>
            </div>
        </div>
        );
    }
}

export default Calculator;