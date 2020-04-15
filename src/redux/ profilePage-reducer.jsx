const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            state.profilePage.postData.push(newPost);
            state.profilePage.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export default profilePageReducer;