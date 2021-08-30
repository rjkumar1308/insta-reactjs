import React from 'react';
import { connect } from 'react-redux';

import HeaderComponent from '../../components/header-component/header.component';
import StoriesComponent from '../../components/stories-component/stories.component';
import PostsComponent from '../../components/posts-component/posts.component';
import UserSectionComponent from '../../components/user-section-component/user-section.component';
import SuggestionsComponent from '../../components/suggestions-component/suggestions.component';

import './home-page.component.scss';
import { Redirect } from 'react-router-dom';

class HomePageComponent extends React.Component {
    componentDidMount() {
        const { isLoggedIn } = this.props;
        if (!isLoggedIn) {
            this.props.history.push('/accounts/login');
        }
    };

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

export default connect(mapStateToProps)(HomePageComponent);

