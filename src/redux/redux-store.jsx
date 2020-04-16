import {combineReducers, createStore} from "redux";
import profilePageReducer from "./ profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";
import {messagesPageReducer} from "./messagesPage-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;