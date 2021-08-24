import { SERVER } from "../../const/const";
import { httpGet } from "../../utils/http.utils";
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
        httpGet(SERVER + 'getPosts').then(response => {
            if (response && response.data && response.data.posts)
                dispatch(updatePosts(response.data.posts));
        });
    }
}