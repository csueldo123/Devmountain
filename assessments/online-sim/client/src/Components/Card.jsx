import React, {Component} from 'react';
import '../App.css';

class Card extends Component {
    render(){

        return(
            <div>
                <div className="card-container">
                    <h3>Day</h3>
                    <h3>Condition</h3>
                    <h4>High</h4>
                    <h4>Low</h4>
                    <div>IMG</div>
                </div>
            </div>
        )
    }
}

export default Card;