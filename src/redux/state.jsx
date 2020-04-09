let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hi", like: 15},
            {id: 2, message: "da da", like: 20},
        ],
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


export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        like: 0
    };
    state.profilePage.postData.push(newPost);
}

export default state;