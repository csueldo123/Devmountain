import React, {Component} from 'react';
import '../App.css';

class Card extends Component {
    render(){

        return(
            <div>
                <div className="card">
                    <h5>{this.props.day}</h5>
                    <h5>{this.props.conditions}</h5>
                    <h5>High {this.props.high}</h5>
                    <h5>Low {this.props.low}</h5>
                    <img src={this.props.icon} alt="img"></img>
                </div>
            </div>
        )
    }
}

export default Card;