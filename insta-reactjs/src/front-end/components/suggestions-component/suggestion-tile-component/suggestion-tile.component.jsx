import './suggestion-tile.component.scss';

export const SuggestionTileComponent = ({suggestion}) => (
    <div className="suggestion-tile">
        <div className="suggestion-tile-left-content">
            <img src={suggestion.avatar} alt="Profile" />
            <div className="suggestion-tile-name-box">
                <p>{suggestion.user_name}</p>
                <span>Followed by {suggestion.followed_by}</span>
            </div>
        </div>
        <div className="suggestion-tile-right-content">
            <span>Follow</span>
        </div>
    </div>
)