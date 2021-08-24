import { SERVER } from "../../const/const";
import { httpGet } from "../../utils/http.utils";
import { userTypes } from "../types/user.types";

export const updateUserDetails = payload => {
    return {
        payload: payload,
        type: userTypes.UPDATE_USER_DETAILS
    };
};

export const updateUserSuggestion = payload => {
    return {
        payload: payload,
        type: userTypes.UPDATE_USER_SUGGESTION
    };
};

//api calls below

export const fetchUserDetails = () => {
    return dispatch => {
        httpGet(SERVER + 'getUserDetails').then(response => {
            if (response && response.data && response.data.user)
                dispatch(updateUserDetails(response.data.user));
        });
    };
};

export const fetchUserSuggestions = () => {
    return dispatch => {
        httpGet(SERVER + 'getSuggestions').then(response => {
            if (response && response.data && response.data.suggestions_list)
                dispatch(updateUserSuggestion(response.data.suggestions_list));
        });
    };
};