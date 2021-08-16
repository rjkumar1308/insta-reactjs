import React from 'react';

import { PostComponent } from '../post-component/post.component';

import './posts.component.scss';

export default class PostsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.setState({
            posts: [{
                'id': 1,
                'avatar': 'https://reqres.in/img/faces/7-image.jpg',
                'user_name': 'Michael',
                'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                'no_of_likes': 544,
                'caption': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'no_of_comments': 122,
                'top_comments': [{
                    'user_name': 'James',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    'user_name': 'Jhonny',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }],
                'post_time': 72000
            },
            {
                'id': 2,
                'avatar': 'https://reqres.in/img/faces/8-image.jpg',
                'user_name': 'Lindsay',
                'image': 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
                'no_of_likes': 284,
                'caption': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'no_of_comments': 12,
                'top_comments': [{
                    'user_name': 'lonna',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    'user_name': 'andrew',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }],
                'post_time': 2000
            },
            {
                'id': 3,
                'avatar': 'https://reqres.in/img/faces/9-image.jpg',
                'user_name': 'Tobias',
                'image': 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
                'no_of_likes': 484,
                'caption': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'no_of_comments': 28,
                'top_comments': [{
                    'user_name': 'Howard',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    'user_name': 'Harry',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }],
                'post_time': 7200
            },
            {
                'id': 4,
                'avatar': 'https://reqres.in/img/faces/10-image.jpg',
                'user_name': 'Byron',
                'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                'no_of_likes': 754,
                'caption': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'no_of_comments': 82,
                'top_comments': [{
                    'user_name': 'Michael',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    'user_name': 'Peggy',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }],
                'post_time': 18500
            },
            {
                'id': 5,
                'avatar': 'https://reqres.in/img/faces/11-image.jpg',
                'user_name': 'George',
                'image': 'https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                'no_of_likes': 942,
                'caption': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'no_of_comments': 256,
                'top_comments': [{
                    'user_name': 'Mona',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    'user_name': 'tommy',
                    'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }],
                'post_time': 57200
            }]
        })
    }

    render() {
        return (
            <div className="posts">
                {
                    this.state.posts.map(post => <PostComponent post={post} key={post.id} />)
                }
            </div>
        )
    }
}