import './post.component.scss';

import { ReactComponent as ThreeDots } from '../../../assets/post/three-dots.svg';
import { ReactComponent as Heart } from '../../../assets/post/heart.svg';
import { ReactComponent as Comment } from '../../../assets/post/comment.svg';
import { ReactComponent as Share } from '../../../assets/post/share.svg';
import { ReactComponent as Save } from '../../../assets/post/save.svg';
import { ReactComponent as Smile } from '../../../assets/post/smile.svg';

const calculateTime = seconds => {
    if (seconds < 60) return parseInt(seconds) + " seconds ago";
    if (seconds < 3600) return parseInt(seconds / 60) + " minutes ago";
    if (seconds < 216000) return parseInt(seconds / 3600) + " hours ago";
    if (seconds < 5184000) return parseInt(seconds / 216000) + " days ago";
}

export const PostComponent = ({ post }) => (
    <div className="post">
        <div className="post-header">
            <div className="post-header-left-content">
                <div className={"module-border-wrap" + (post.userHasStories ? '' : ' background-none')}>
                    <img src={post.avatar} alt="Profile" />
                </div>
                <span>{post.user_name}</span>
            </div>
            <div className="post-header-right-content">
                <ThreeDots />
            </div>
        </div>
        <div className="post-image">
            <img src={post.image} alt="Post" />
        </div>
        <div className="post-bottom-content">
            <div className="buttons-content">
                <div className="left-icons">
                    <Heart />
                    <Comment />
                    <Share />
                </div>
                <div className="right-icon">
                    <Save />
                </div>
            </div>
            <div className="no-of-likes">
                {post.no_of_likes > 0 ? (<span>{post.no_of_likes} likes</span>)
                    :
                    (<span className="font-weight-normal">Be the first to <strong>like this</strong></span>)}
            </div>
            <div className="caption">
                {post.caption.length > 0 && (<span><strong>{post.user_name} </strong>{post.caption}</span>)}
            </div>
            <div className="view-all-comments">
                {post.no_of_comments > 0 && (<span>View all {post.no_of_comments} comments</span>)}
            </div>
            <div className="top-comments">
                {
                    post.top_comments && post.top_comments.length > 0 && post.top_comments.map(comment => <span key={comment.user_name}><strong>{comment.user_name}</strong> {comment.comment}</span>)
                }
            </div>
            <div className="post-time">
                {calculateTime(post.post_time)}
            </div>
            <div className="add-comment-section">
                <div className="emoji">
                    <Smile />
                </div>
                <input placeholder="Add a comment..." />
                <span>Post</span>
            </div>
        </div>
    </div >
);