import React from 'react';
import { connect } from 'react-redux';

import { StoryComponent } from './story-component/story.component';

import './stories.component.scss';

class StoriesComponent extends React.Component {
    componentDidMount() {
        // this.setState({
        //     stories: [{ "id": 1, "user_name": "Michael", "avatar": "https://reqres.in/img/faces/7-image.jpg" }, { "id": 2, "user_name": "Lindsay", "avatar": "https://reqres.in/img/faces/8-image.jpg" }, { "id": 3, "user_name": "Tobias", "avatar": "https://reqres.in/img/faces/9-image.jpg" }, { "id": 4, "user_name": "Byron", "avatar": "https://reqres.in/img/faces/10-image.jpg" }, { "id": 5, "user_name": "George", "avatar": "https://reqres.in/img/faces/11-image.jpg" }, { "id": 6, "user_name": "Rachel", "avatar": "https://reqres.in/img/faces/12-image.jpg" }]
        // })
    }

    render() {
        const { stories } = this.props;
        return (
            <div className="stories-box">
                {
                    stories && stories.length && stories.map(story => (
                        <StoryComponent story={story} key={story.id} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.stories.stories
})

export default connect(mapStateToProps)(StoriesComponent);