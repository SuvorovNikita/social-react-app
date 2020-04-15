const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const messagesPageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.messagesPage.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.messagesPage.newMessageBody;
            state.messagesPage.newMessageBody = '';
            state.messagesPage.messagesData.push({id: 4, message: body});
            return state;
        default:
            return state;
    }
};



export default messagesPageReducer;