import React from 'react';
import { Link } from 'react-router-dom';

import LoginFormComponent from '../../components/login-form-component/login-form.component';
import { GetAppComponent } from '../../components/get-app-component/get-app.component';
import logo from '../../assets/logo.png';

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
                    <p>Don't have an account?<Link to='/accounts/signup'><span>Sign up</span></Link></p>
                </div>
                <div>
                    <GetAppComponent />
                </div>
            </div>
        );
    };
};