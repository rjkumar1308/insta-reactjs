import './story.component.scss';

export const StoryComponent = ({ story }) => (
    <div className="story">
        <img src={story.avatar} alt="Story" />
        <span className="user-name">{story.user_name}</span>
    </div>
);