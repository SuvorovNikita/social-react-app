import React from 'react';
import './index.module.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, subscribe, upDateNewPostText} from "./redux/state";
import App from "./App";
import ReactDOM from 'react-dom'


let rerenderEntireTree = () => {
    ReactDOM.render(<App addPost={addPost} upDateNewPostText={upDateNewPostText}
                         state={state}/>, document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
