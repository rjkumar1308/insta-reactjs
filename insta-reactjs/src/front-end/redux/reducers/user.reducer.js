import { userTypes } from "../types/user.types";

const INITIAL_STATE = {
    user: {
        user_details: {},
        user_suggestions: [],
        isLoggedIn: false,
        loginError: ''
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.UPDATE_USER_DETAILS:
            return { ...state, user: { ...state.user, user_details: action.payload } };
        case userTypes.UPDATE_USER_SUGGESTION:
            return { ...state, user: { ...state.user, user_suggestions: action.payload } };
        case userTypes.UPDATE_USER_IS_LOGGED_IN:
            return { ...state, user: { ...state.user, isLoggedIn: action.payload } };
        case userTypes.UPDATE_USER_LOGIN_ERROR:
            return { ...state, user: { ...state.user, loginError: action.payload } };
        default:
            return state;
    }
};

export default userReducer;