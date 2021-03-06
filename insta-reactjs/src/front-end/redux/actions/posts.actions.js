import { SERVER } from "../../const/const";
import { httpGet, getHeader } from "../../utils/http.utils";
import { postsTypes } from "../types/posts.types";

export const updatePosts = payload => {
    return {
        payload: payload,
        type: postsTypes.UPDATE_POSTS
    };
};

//api calls below

export const fetchPosts = () => {
    return dispatch => {
        httpGet(SERVER + 'posts/getPosts', getHeader()).then(response => {
            if (response && response.posts)
                dispatch(updatePosts(response.posts));
        });
    }
}