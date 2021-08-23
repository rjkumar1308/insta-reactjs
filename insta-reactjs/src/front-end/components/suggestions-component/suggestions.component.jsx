import React from 'react';
import './suggestions.component.scss';
import { SuggestionTileComponent } from './suggestion-tile-component/suggestion-tile.component';

export default class SuggestionsComponent extends React.Component {
    constructor(){
        super();
        this.state={
            suggestions_list: []
        };
    }
    componentDidMount(){
        this.setState({
            suggestions_list:[{ "id": 1, "user_name": "Michael", "avatar": "https://reqres.in/img/faces/7-image.jpg", "followed_by": "James" }, { "id": 2, "user_name": "Lindsay", "avatar": "https://reqres.in/img/faces/8-image.jpg", "followed_by": "Charlie" }, { "id": 3, "user_name": "Tobias", "avatar": "https://reqres.in/img/faces/9-image.jpg", "followed_by": "Michael" }, { "id": 4, "user_name": "Byron", "avatar": "https://reqres.in/img/faces/10-image.jpg", "followed_by": "Tony" }, { "id": 5, "user_name": "George", "avatar": "https://reqres.in/img/faces/11-image.jpg", "followed_by": "Tina" }, { "id": 6, "user_name": "Rachel", "avatar": "https://reqres.in/img/faces/12-image.jpg", "followed_by": "Ross" }]
        })
    }
    render(){
        return(
            <div className="suggestions-component">
                <div className="suggestions-heading">
                    <span>Suggestion For You</span>
                    <span className="see-all-link">See All</span>
                </div>
                <div className="suggestion-tiles">
                    {
                        this.state.suggestions_list.map( suggestion => <SuggestionTileComponent suggestion={suggestion} key={suggestion.id} />)
                    }
                </div>
            </div>
        )
    }
}