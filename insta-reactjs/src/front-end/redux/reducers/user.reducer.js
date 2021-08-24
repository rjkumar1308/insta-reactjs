import { userTypes } from "../types/user.types";

const INITIAL_STATE = {
    user: {
        user_details: {},
        user_suggestions:[]
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.UPDATE_USER_DETAILS:
            return { ...state, user: { ...state.user, user_details: action.payload } };
        case userTypes.UPDATE_USER_SUGGESTION:
            return { ...state, user: { ...state.user, user_suggestions: action.payload } };
        default:
            return state;
    }
};

export default userReducer;