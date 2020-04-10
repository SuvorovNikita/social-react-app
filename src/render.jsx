import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import {addPost, upDateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App addPost={addPost} upDateNewPostText={upDateNewPostText} state={state}/>, document.getElementById('root'));
};




