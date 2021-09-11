import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signupUser, changeSignupSuccess, checkUserNameOrEmailExists } from '../../redux/actions/user.actions';

import tick from '../../assets/tick.png';
import cross from '../../assets/cross.png';
import random from '../../assets/random.png';

import './signup-form.component.scss';

class SignupFromComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isValidMobile: false,
            isValidFullName: false,
            isValidUserName: false,
            isValidPassword: false,
            mobile: '',
            full_name: '',
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

    componentDidUpdate() {
        const { signupSuccess, changeSignupSuccess, buttonRef, toggleOverlayFlag } = this.props;
        if (signupSuccess) {
            toggleOverlayFlag();
            changeSignupSuccess();
            buttonRef.current.addEventListener('click', ()=> {
                this.props.history.push('/accounts/login');
            });
        }
    }

    hanldeChange = async (e, from) => {
        if (from === 'mobile') {
            const validMobilePattern = new RegExp(/^\d{10}$/);
            const vaildEmailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            const value = e.target.value;
            this.setState({
                mobile: value
            });
            let check = true;
            if (validMobilePattern.test(value) || vaildEmailPattern.test(value))
                check = await checkUserNameOrEmailExists(value, 'mobile');
            const cond = !check;
            this.setState({
                isValidMobile: cond
            });
        }
        if (from === 'full_name') {
            this.setState({
                isValidFullName: e.target.value.length > 4 && e.target.value.includes(' '),
                full_name: e.target.value
            });
        }
        if (from === 'username') {
            const value = e.target.value;
            this.setState({
                username: value
            });
            let check = true;
            if (value.length > 4)
                check = await checkUserNameOrEmailExists(value, 'username');
            const cond = !value.includes(' ') && !check;
            this.setState({
                isValidUserName: cond,
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

    handleSignup = () => {
        const { username, password, mobile, full_name } = this.state;
        const { signupUser } = this.props;
        signupUser(username, password, mobile, full_name);
    }

    generateUserName = () => {
        let { full_name } = this.state;
        full_name = full_name.replace(' ', '').toLowerCase() + Math.floor(Math.random() * (9999 - 1000) + 1000);
        const e = {
            target: {
                value: full_name
            }
        }
        this.hanldeChange(e, 'username')
    }

    render() {
        const { isValidUserName, isValidPassword, isValidMobile, isValidFullName, username, password, mobile, full_name } = this.state;
        const isValid = isValidUserName && isValidPassword && isValidMobile && isValidFullName;

        return (
            <div className="login-form-wrapper">
                <div className="or-section">
                    <div className="middle-line"></div>
                    <div className="or-text"><span>or</span></div>
                    <div className="middle-line"></div>
                </div>
                <div className="mobile-section">
                    <input type="text" className="mobile-input" value={mobile} onChange={e => this.hanldeChange(e, 'mobile')} required />
                    <span className='label-top'>Mobile Number or Email</span>
                    <img src={isValidMobile ? tick : cross} className={mobile.length > 0 ? '' : 'hidden'} alt='tick or cross icon' />
                </div>
                <div className="name-section">
                    <input type="text" className="name-input" value={full_name} onChange={e => this.hanldeChange(e, 'full_name')} required />
                    <span className='label-top'>Full Name</span>
                    <img src={isValidFullName ? tick : cross} className={full_name.length > 0 ? '' : 'hidden'} alt='tick or cross icon' />
                </div>
                <div className="username-section">
                    <input type="text" className="username-input" value={username} onChange={e => this.hanldeChange(e, 'username')} required />
                    <span className='label-top'>Username</span>
                    <img src={isValidUserName ? tick : cross} className={username.length > 0 ? '' : 'hidden'} alt='tick or cross icon' />
                    <img src={random} className={'random' + (isValidFullName && username.length > 0 ? '' : ' hidden')} alt='random icon' onClick={this.generateUserName} />
                </div>
                <div className="password-section">
                    <input type="password" className="password-input" value={password} onChange={e => this.hanldeChange(e, 'password')} required />
                    <span className='label-top'>Password</span>
                    <img src={isValidPassword ? tick : cross} className={password.length > 0 ? '' : 'hidden'} alt='tick or cross icon' />
                </div>
                <div className="login-button-section">
                    <button className={"login-button" + (isValid ? '' : ' disabled')} disabled={!isValid} onClick={this.handleSignup}><span>Sign up</span></button>
                </div>
                <div className="terms-section">
                    By signing up, you agree to our <strong>Terms , Data Policy and Cookies Policy</strong>.
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    isLoggedIn: state.userReducer.user.isLoggedIn,
    signupSuccess: state.userReducer.user.signupSuccess
});

const mapDispatchToProps = dispatch => ({
    signupUser: (username, password, mobile, full_name) => dispatch(signupUser(username, password, mobile, full_name)),
    changeSignupSuccess: () => dispatch(changeSignupSuccess(false)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupFromComponent));