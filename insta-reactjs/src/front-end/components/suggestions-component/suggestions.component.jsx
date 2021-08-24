import React from 'react';
import { connect } from 'react-redux';

import { fetchUserSuggestions } from '../../redux/actions/user.actions';
import { SuggestionTileComponent } from './suggestion-tile-component/suggestion-tile.component';

import './suggestions.component.scss';

class SuggestionsComponent extends React.Component {
    componentDidMount() {
        const { fetchUserSuggestions } = this.props;
        fetchUserSuggestions();
    }

    render() {
        const { user_suggestions } = this.props;
        return (
            <div className="suggestions-component">
                <div className="suggestions-heading">
                    <span>Suggestion For You</span>
                    <span className="see-all-link">See All</span>
                </div>
                <div className="suggestion-tiles">
                    {
                        user_suggestions.map(suggestion => <SuggestionTileComponent suggestion={suggestion} key={suggestion.id} />)
                    }
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchUserSuggestions: () => dispatch(fetchUserSuggestions())
});

const mapStateToProps = state => ({
    user_suggestions: state.userReducer.user.user_suggestions
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsComponent);