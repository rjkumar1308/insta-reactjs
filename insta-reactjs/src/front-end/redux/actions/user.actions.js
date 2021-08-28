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
        httpGet(SERVER + 'user/getUserDetails').then(response => {
            if (response && response.user_details)
                dispatch(updateUserDetails(response.user_details));
        });
    };
};

export const fetchUserSuggestions = () => {
    return dispatch => {
        httpGet(SERVER + 'user/getSuggestions').then(response => {
            if (response && response.suggestions_list)
                dispatch(updateUserSuggestion(response.suggestions_list));
        });
    };
};