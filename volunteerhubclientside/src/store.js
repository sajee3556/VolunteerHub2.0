import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import volunteerPostsReducer from "./reducers/volunteerPostsReducer";

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
    volunteerPosts: volunteerPostsReducer
});

const store = createStore(rootReducer, initialState,
    compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;