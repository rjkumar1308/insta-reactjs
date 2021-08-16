import './post.component.scss';

import { ReactComponent as ThreeDots } from '../../assets/post/three-dots.svg';

export const PostComponent = ({ post }) => (
    <div className="post">
        <div className="post-header">
            <div className="left-content">
                <div className="module-border-wrap">
                    <img src={post.avatar} alt="Profile" />
                </div>
                <span>{post.user_name}</span>
            </div>
            <div className="right-content">
                <ThreeDots />
            </div>
        </div>
        <div className="post-image">
            <img src={post.image} alt="Post" />
        </div>
        <div className="post-bottom-content">

        </div>
    </div>
);