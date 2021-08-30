import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../../redux/actions/user.actions';

import { ReactComponent as Home } from '../../../assets/header/home.svg';
import { ReactComponent as Message } from '../../../assets/header/message.svg';
import { ReactComponent as Add } from '../../../assets/header/add.svg';
import { ReactComponent as Explore } from '../../../assets/header/explore.svg';
import { ReactComponent as Heart } from '../../../assets/header/heart.svg';
import Profile from '../../../assets/header/profile.png';

import './right-logos.component.scss';

class RightLogosComponents extends React.Component {
    logout = () => {
        const { logoutUser } = this.props;
        logoutUser();
    }

    render() {
        return (
            <div className="right-logos">
                <div className="home-logo"><Home /></div>
                <div className="message-logo"><Message /></div>
                <div className="add-logo"><Add /></div>
                <div className="explore-logo"><Explore /></div>
                <div className="heart-logo"><Heart /></div>
                <div className="profile-image" onClick={this.logout}>
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(RightLogosComponents);