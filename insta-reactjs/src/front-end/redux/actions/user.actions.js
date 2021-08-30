import { SERVER } from "../../const/const";
import { httpGet, httpPost } from "../../utils/http.utils";
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

export const updateIsLoggedIn = payload => {
    return {
        payload: payload,
        type: userTypes.UPDATE_USER_IS_LOGGED_IN
    }
}

export const updateLoginError = payload => {
    return {
        payload: payload,
        type: userTypes.UPDATE_USER_LOGIN_ERROR
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch(updateIsLoggedIn(false));
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

export const loginUser = (username, password) => {
    return dispatch => {
        httpPost(SERVER + 'user/login', { username, password }).then(response => {
            if (response && response.accessToken) {
                localStorage.setItem('accessToken', response.accessToken);
                dispatch(updateIsLoggedIn(true));
                dispatch(updateLoginError(''));
            }
            if (response && response.errorMessage) {
                dispatch(updateLoginError(response.errorMessage));
            }
        });
    };
};