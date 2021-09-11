import React from 'react';
import { Link } from 'react-router-dom';

import SignupFormComponent from '../../components/signup-form-component/signup-form.component';
import { GetAppComponent } from '../../components/get-app-component/get-app.component';
import logo from '../../assets/logo.png';

import './signup-page.component.scss';

export default class SignupPageComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            showOverlay: false
        };
        this.buttonRef = React.createRef();
    }

    toggleOverlayFlag = () => {
        this.setState(prevState => ({
            showOverlay: !prevState.showOverlay
        }));
    }
    render() {
        const { showOverlay } = this.state;

        return (
            <div className="login-wrapper">
                <div className={"overlay-section" + (showOverlay ? '' : ' hidden')} >
                    <div className="overlay">
                        <p>Congratulations, your account has been successfully created.</p>
                        <button className='continue-button' ref={this.buttonRef}>Continue</button>
                    </div>
                </div>
                <div className="login-box">
                    <div className="logo-section">
                        <img src={logo} title="Logo" alt="Logo" />
                    </div>
                    <div className="signup-text">
                        Sign up to see photos and videos from your friends.
                    </div>
                    <div className="login-with-fb-section">
                        <button className="fb-button">Log in with Facebook</button>
                    </div>
                    <div className="login-form-section">
                        <SignupFormComponent buttonRef={this.buttonRef} toggleOverlayFlag={this.toggleOverlayFlag} />
                    </div>
                </div>
                <div className="sign-up-box">
                    <p>Have an account?<Link to='/accounts/login'><span>Log in</span></Link></p>
                </div>
                <div>
                    <GetAppComponent />
                </div>
            </div>
        );
    };
};