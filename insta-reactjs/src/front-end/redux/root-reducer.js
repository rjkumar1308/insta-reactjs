import { combineReducers } from "redux";

import storiesReducer from "./reducers/stories.reducer";

const rootReducer = combineReducers({
    stories:storiesReducer
});

export default rootReducer;