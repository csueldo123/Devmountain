import React, { Component } from 'react';
import '../App.css';

class Profile extends Component {
    render(){



        return(
            <div className="profile">
                <img 
                className="profile-img"
                alt="Profile"
                src="https://i.scdn.co/image/aa32d6d4ca2467974403518dd3ebfe8831c5ced1"
                />
                <div className="profile-info">
                    <div className="profile-name">Profile Name</div>
                    <div className="profile-followers">234123412 followers</div>
                    <div className="profile-genres"><span>Genres, can, go, here</span></div>
                </div>
            </div>
        );
    }
}

export default Profile;