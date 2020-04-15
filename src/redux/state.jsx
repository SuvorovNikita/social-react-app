import messagesPageReducer from "./messagesPage-reducer";
import profilePageReducer from "./ profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {

    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hi", like: 15},
                {id: 2, message: "da da", like: 20},
            ],
            newPostText: 'it'
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Nikita"},
                {id: 2, name: "Alisa"},
                {id: 3, name: "Zheka"},
                {id: 4, name: "Serega"},
                {id: 5, name: "Masha"},
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "kak dela?"},
                {id: 3, message: "good"},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubs() {
        console.log('sda');
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._state._callSubs = observer;
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage.newPostText, action);
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage.newMessageBody, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubs(this._state);

    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
};


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
};

export default store;