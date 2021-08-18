import React from 'react';
import HeaderComponent from './components/header-component/header.component';
import StoriesComponent from './components/stories-component/stories.component.jsx';
import PostsComponent from './components/posts-component/posts.component';
import UserSection from './components/user-section-component/user-section.component'; 
import SuggestionsComponent from './components/suggestions-component/suggestions.component';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <div className="main-content">
          <div className="left-content">
            <StoriesComponent />
            <PostsComponent />
          </div>
          <div className="right-content">
            <UserSection />
            <div className="suggestions-section">
              <SuggestionsComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
