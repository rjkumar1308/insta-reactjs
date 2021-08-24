import { postsTypes } from "../types/posts.types";

const INITIAL_STATE = {
    posts: []
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postsTypes.UPDATE_POSTS:
            return { ...state, posts: action.payload }
        default:
            return state;
    };
};

export default postsReducer;