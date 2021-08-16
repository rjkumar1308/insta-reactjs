import React from 'react';

import { PostComponent } from '../post-component/post.component';

import './posts.component.scss';

export default class PostsComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            posts:[]
        };
    }

    componentDidMount(){
        this.setState({
            posts:[{
                'id':1,
                'avatar':'https://reqres.in/img/faces/7-image.jpg',
                'user_name':'Michael',
                'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',

            }]
        })
    }

    render(){
        return(
            <div className="posts">
                {
                    this.state.posts.map( post => <PostComponent post={post} key={post.id} />)
                }
            </div>
        )
    }
}