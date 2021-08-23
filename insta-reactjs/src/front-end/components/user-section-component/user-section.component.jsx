import React from 'react';
import './user-section.component.scss';

export default class UserSection extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        this.setState({
            user: {
                user_name: 'rjkumar1308',
                first_name: 'Rajat',
                last_name: 'Kumar',
                profile_image: 'https://reqres.in/img/faces/8-image.jpg'
            }
        });
    }

    render() {
        return (
            <div className="user-section">
                <div className="left-user-section">
                    <img src={this.state.user.profile_image} alt="User Profile" />
                    <div className="user-name">
                        <p>{this.state.user.user_name}</p>
                        <span>{this.state.user.first_name + " " + this.state.user.last_name}</span>
                    </div>
                </div>
                <div className="right-user-section">
                    <span className="switch-button">Switch</span>
                </div>
            </div>
        )
    }
}