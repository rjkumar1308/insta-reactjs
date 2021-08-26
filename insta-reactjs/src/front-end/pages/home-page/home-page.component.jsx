import React from 'react';

import HeaderComponent from '../../components/header-component/header.component';
import StoriesComponent from '../../components/stories-component/stories.component';
import PostsComponent from '../../components/posts-component/posts.component';
import UserSectionComponent from '../../components/user-section-component/user-section.component';
import SuggestionsComponent from '../../components/suggestions-component/suggestions.component';

import './home-page.component.scss';

export default class HomePageComponent extends React.Component {
    render() {
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

