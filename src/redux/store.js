import {combineReducers, compose, createStore} from "redux";
import noteReducer from "./reducers/note-reducer";

let reducers = combineReducers({
    notes: noteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;