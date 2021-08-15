import React from 'react';
import HeaderComponent from './components/header-component/header.component';
import StoriesComponent from './components/stories-component/stories.component.jsx';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <div className="main-content">
          <div className="left-content">
            <StoriesComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
