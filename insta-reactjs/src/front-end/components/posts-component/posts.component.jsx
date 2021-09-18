import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../redux/actions/posts.actions';
import PostComponent from './post-component/post.component';

import './posts.component.scss';

class PostsComponent extends React.Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="posts">
                {
                    posts && posts.length > 0 ?
                        posts.map(post => <PostComponent post={post} key={post._id} />)
                        :
                        (<div>Suggestions For You</div>)
                }
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

const mapStateToProps = state => ({
    posts: state.postsReducer.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent)