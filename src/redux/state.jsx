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
        }
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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubs(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._state._callSubs();
        }
    }
};

export default store;