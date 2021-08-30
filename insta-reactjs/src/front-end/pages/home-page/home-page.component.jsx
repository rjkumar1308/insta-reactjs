import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { verifyLogin } from '../../redux/actions/user.actions';

import HeaderComponent from '../../components/header-component/header.component';
import StoriesComponent from '../../components/stories-component/stories.component';
import PostsComponent from '../../components/posts-component/posts.component';
import UserSectionComponent from '../../components/user-section-component/user-section.component';
import SuggestionsComponent from '../../components/suggestions-component/suggestions.component';

import './home-page.component.scss';

class HomePageComponent extends React.Component {
    componentDidMount() {
        const { dispatchVerifyLogin } = this.props;
        dispatchVerifyLogin();
    };

    componentDidUpdate() {
        const { isLoggedIn } = this.props;
        if (!isLoggedIn) {
            this.props.history.push('/accounts/login');
        }
    }

    render() {
        const { isLoggedIn } = this.props;
        if (!isLoggedIn) {
            return <Redirect to='/accounts/login' />
        }
        return (
            <div className="home-page">
                <HeaderComponent />
                <div className="main-content">
                    <div className="left-content">
                        <StoriesComponent />
                        <PostsComponent />
                    </div>
                    <div className="right-content">
                        <UserSectionComponent />
                        <div className="suggestions-section">
                            <SuggestionsComponent />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    isLoggedIn: state.userReducer.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    dispatchVerifyLogin : () => dispatch(verifyLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);

