import { combineReducers } from "redux";

import storiesReducer from "./reducers/stories.reducer";
import postsReducer from "./reducers/posts.reducer";
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
    storiesReducer:storiesReducer,
    postsReducer:postsReducer,
    userReducer:userReducer
});

export default rootReducer;