import './story.component.scss';

export const StoryComponent = ({ story }) => (
    <div className="story">
        <div className="module-border-wrap"><img src={story.avatar} alt="Story" /></div>
        <span className="user-name">{story.user_name}</span>
    </div>
);