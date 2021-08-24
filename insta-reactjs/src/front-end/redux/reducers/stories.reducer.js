import { storiesTypes } from "../types/stories.types";

const INITIAL_STATE = {
    stories: []
};

const storiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case storiesTypes.updateStories:
            return { ...state, stories: action.payload }
        default:
            return state;
    };
};

export default storiesReducer;