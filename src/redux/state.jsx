import {rerenderEntireTree} from "../render";


let state = {
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
    }

};


export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};


export let upDateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;