import React from 'react';

import LoginFormComponent from '../../components/login-form-component/login-form.component';
import logo from '../../assets/logo.png';
import apple from '../../assets/apple-link.png';
import google from '../../assets/google-link.png';

import './login-page.component.scss';

export default class LoginPageComponent extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-box">
                    <div className="logo-section">
                        <img src={logo} title="Logo" alt="Logo" />
                    </div>
                    <div className="login-form-section">
                        <LoginFormComponent />
                    </div>
                    <div className="login-with-fb-section">
                        <div>Log in with Facebook</div>
                        <span>Forgot password?</span>
                    </div>
                </div>
                <div className="sign-up-box">
                    <p>Don't have an account?<span>Sign up</span></p>
                </div>
                <div className="get-app-box">
                    <p>Get the app</p>
                    <div className="links">
                        <img src={apple} alt="Link to Apple" title="Link to Apple" />
                        <img src={google} alt="Link to Google" title="Link to Google" />
                    </div>
                </div>
            </div>
        );
    };
};