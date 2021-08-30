import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../../redux/actions/user.actions';

import './login-form.component.scss';

class LoginFromComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isValidUserName: false,
            isValidPassword: false,
            username: '',
            password: ''
        };
    };

    componentDidMount() {
        const { isLoggedIn } = this.props;
        if (isLoggedIn) {
            this.props.history.push('/');
        }
    }

    hanldeChange = (e, from) => {
        if (from === 'username') {
            this.setState({
                isValidUserName: e.target.value.length > 4,
                username: e.target.value
            });
        }
        if (from === 'password') {
            const validPasswordPattern = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
            this.setState({
                isValidPassword: validPasswordPattern.test(e.target.value),
                password: e.target.value
            });
        }
    }

    handleLogin = () => {
        const { username, password } = this.state;
        const { loginUser } = this.props;
        loginUser(username, password);
    }

    render() {
        const { isValidUserName, isValidPassword, username, password } = this.state;
        const isValid = isValidUserName && isValidPassword;
        const { loginError, isLoggedIn } = this.props;
        if (isLoggedIn) {
            return <Redirect to='/' />
        }
        return (
            <div className="login-form-wrapper">
                <div className="username-section">
                    <input type="text" className="username-input" value={username} onChange={e => this.hanldeChange(e, 'username')} required />
                    <span className='label-top'>Phone number, username or email</span>
                </div>
                <div className="password-section">
                    <input type="password" className="password-input" value={password} onChange={e => this.hanldeChange(e, 'password')} required />
                    <span className='label-top'>Password</span>
                </div>
                <div className={"error-section" + (loginError ? ' hidden' : '')}>
                    <span>{loginError}</span>
                </div>
                <div className="login-button-section">
                    <button className={"login-button" + (isValid ? '' : ' disabled')} disabled={!isValid} onClick={this.handleLogin}><span>Log In</span></button>
                </div>
                <div className="or-section">
                    <div className="middle-line"></div>
                    <div className="or-text"><span>or</span></div>
                    <div className="middle-line"></div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    isLoggedIn: state.userReducer.user.isLoggedIn,
    loginError: state.userReducer.user.loginError
});

const mapDispatchToProps = dispatch => ({
    loginUser: (username, password) => dispatch(loginUser(username, password))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFromComponent));