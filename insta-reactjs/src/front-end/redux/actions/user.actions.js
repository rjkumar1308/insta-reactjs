import { SERVER } from "../../const/const";
import { getHeader, httpGet, httpPost } from "../../utils/http.utils";
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

export const updateSignupSuccess = payload => {
    return {
        payload: payload,
        type: userTypes.UPDATE_SIGNUP_SUCCESS
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
        localStorage.removeItem('accessToken');
    };
};

export const changeSignupSuccess = (value = false) => {
    return dispatch => {
        dispatch(updateSignupSuccess(value));
    };
};

//api calls below

export const fetchUserDetails = () => {
    return dispatch => {
        httpGet(SERVER + 'user/getUserDetails', getHeader()).then(response => {
            if (response && response.user_details)
                dispatch(updateUserDetails(response.user_details));
        });
    };
};

export const fetchUserSuggestions = () => {
    return dispatch => {
        httpGet(SERVER + 'user/getSuggestions', getHeader()).then(response => {
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

export const verifyLogin = () => {
    return dispatch => {
        httpGet(SERVER + 'user/verify', getHeader()).then(response => {
            if (response && response.success) {
                dispatch(updateIsLoggedIn(true));
            }
            else {
                dispatch(updateIsLoggedIn(false));
                localStorage.removeItem('accessToken');
            }
        });
    };
};

export const signupUser = (username, password, mobile, full_name) => {
    return dispatch => {
        const body = {
            username,
            password,
            full_name,
            role: 'user'
        }
        if (new RegExp('[0-9]{10}').test(mobile)) {
            body.mobile = mobile;
        }
        else {
            body.email = mobile;
        }
        httpPost(SERVER + 'user/signup', body).then(response => {
            if (response && response.success) {
                dispatch(updateSignupSuccess(true));
            }
        });
    };
};

export const checkUserNameOrEmailExists = (value, type) => {
    const body = {};
    if (type === 'username') {
        body.user_name = value
    }
    else if (type === 'mobile') {
        if (new RegExp('[0-9]{10}').test(value)) {
            body.mobile = value;
        }
        else {
            body.email = value
        }
    }
    else {
        console.log("Error!");
        return;
    }
    return httpPost(SERVER + 'user/check', body).then(response => {
        if (response && response.exists === true) {
            return true;
        }
        else {
            return false;
        }
    });
};