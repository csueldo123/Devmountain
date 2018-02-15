import React, {Component} from 'react';
import '../App.css';

class Card extends Component {
    render(){

        return(
            <div>
                <div className="card-container">
                    <h3>{this.props.day}</h3>
                    <h3>{this.props.conditions}</h3>
                    <h4>{this.props.high}</h4>
                    <h4>{this.props.low}</h4>
                    <img src={this.props.icon}></img>
                </div>
            </div>
        )
    }
}

export default Card;