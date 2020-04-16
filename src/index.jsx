import React from 'react';
import './index.module.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import App from "./App";
import ReactDOM from 'react-dom'


let rerenderEntireTree = () => {
    ReactDOM.render(<App dispatch={store.dispatch.bind(store)} store={store}
                         state={store.getState()}/>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
