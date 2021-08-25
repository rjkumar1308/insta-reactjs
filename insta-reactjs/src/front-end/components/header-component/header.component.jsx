import React from 'react';
import { SearchBarComponent } from './search-bar-component/search-bar.component';
import RightLogosComponents from './right-logos-component/right-logos.component';

import logo from '../../assets/logo.png';

import './header.component.scss';

export default class HeaderComponent extends React.Component {

    render() {
        return (
            <div className="header-container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt="header-logo" />
                    </div>
                    <div className="header-search-bar">
                        <SearchBarComponent />
                    </div>
                    <div className="header-right-logos">
                        <RightLogosComponents />
                    </div>
                </div>
            </div>
        )
    }
}

