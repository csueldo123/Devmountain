import React, { Component } from 'react';

class Page1 extends Component {
    render() {
        return (
            <div className="page">
                <h1>You are on Page1</h1>
                <h3>Now try going to:</h3>
                <h4>localhost:3000/page2</h4>
                <h4>localhost:3000/page3</h4>
                <h4>localhost:3000/page4</h4>
                
            </div>
            
        )
    }
}

export default Page1;