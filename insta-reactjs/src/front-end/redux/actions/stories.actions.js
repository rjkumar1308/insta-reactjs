import { SERVER } from '../../const/const';
import { getHeader, httpGet } from '../../utils/http.utils';
import { storiesTypes } from "../types/stories.types"

export const updateStories = payload => {
    return {
        payload: payload,
        type: storiesTypes.UPDATE_STORIES
    }
}

// api calls below


export const fetchStories = () => {
    return dispatch => {
        httpGet(SERVER + 'stories/getStories', getHeader()).then(response => {
            if (response && response.stories)
                dispatch(updateStories(response.stories));
        });
    }
}