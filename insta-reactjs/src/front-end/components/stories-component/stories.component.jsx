import React from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../../redux/actions/stories.actions';

import { StoryComponent } from './story-component/story.component';

import './stories.component.scss';

class StoriesComponent extends React.Component {
    componentDidMount() {
        const { fetchStories } = this.props;
        fetchStories();
    }

    render() {
        const { stories } = this.props;
        return (
            <div className="stories-box">
                {
                    stories && stories.length && stories.map(story => (
                        <StoryComponent story={story} key={story._id} />
                    ))
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStories: () => dispatch(fetchStories())
    };
};

const mapStateToProps = state => ({
    stories: state.storiesReducer.stories
})

export default connect(mapStateToProps, mapDispatchToProps)(StoriesComponent);