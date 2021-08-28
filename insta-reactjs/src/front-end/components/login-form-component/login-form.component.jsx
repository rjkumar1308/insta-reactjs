import React from 'react';
import { connect } from 'react-redux';

import './login-form.component.scss';

class LoginFromComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isValidEmail: false,
            isValidPassword: false
        };
    };

    hanldeChange = (e, from) => {
        if (from === 'username') {
            const validEmailPattern = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
            this.setState({
                isValidEmail : validEmailPattern.test(e.target.value)
            });
        }
        if (from === 'password') {
            const validPasswordPattern = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
            this.setState({
                isValidPassword : validPasswordPattern.test(e.target.value)
            });
        }
    }

    render() {
        const { isValidEmail, isValidPassword } = this.state;
        const isValid =  isValidEmail && isValidPassword;
        return (
            <form className="login-form-wrapper">
                <div className="username-section">
                    <input type="text" className="username-input" onChange={e => this.hanldeChange(e, 'username')} required />
                    <span className='label-top'>Phone number, username or email</span>
                </div>
                <div className="password-section">
                    <input type="password" className="password-input" onChange={e => this.hanldeChange(e, 'password')} required />
                    <span className='label-top'>Password</span>
                </div>
                <div className="login-button-section">
                    <button type="submit" className={"login-button" + (isValid ? '' : ' disabled')} disabled={!isValid}><span>Log In</span></button>
                </div>
                <div className="or-section">
                    <div className="middle-line"></div>
                    <div className="or-text"><span>or</span></div>
                    <div className="middle-line"></div>
                </div>
            </form>
        );
    };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFromComponent);