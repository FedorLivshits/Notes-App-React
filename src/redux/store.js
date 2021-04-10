import {combineReducers, compose, createStore} from "redux";

let reducers = combineReducers({
    notes: noteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;