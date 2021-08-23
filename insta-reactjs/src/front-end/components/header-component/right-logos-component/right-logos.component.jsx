import React from 'react';

import { ReactComponent as Home } from '../../../assets/header/home.svg';
import { ReactComponent as Message } from '../../../assets/header/message.svg';
import { ReactComponent as Add } from '../../../assets/header/add.svg';
import { ReactComponent as Explore } from '../../../assets/header/explore.svg';
import { ReactComponent as Heart } from '../../../assets/header/heart.svg';
import Profile from '../../../assets/header/profile.png';

import './right-logos.component.scss';

export default class RightLogosComponents extends React.Component{
    render(){
        return(
            <div className="right-logos">
                <div className="home-logo"><Home /></div>
                <div className="message-logo"><Message /></div>
                <div className="add-logo"><Add /></div>
                <div className="explore-logo"><Explore /></div>
                <div className="heart-logo"><Heart /></div>
                <div className="profile-image">
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
        )
    }
}