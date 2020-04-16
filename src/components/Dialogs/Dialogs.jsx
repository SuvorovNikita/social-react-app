import React, {createRef} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";


const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

        let dialogElements = state.dialogsData
            .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

        let messagesElements = state.messagesData
            .map(message => <Message message={message.message}/>);

        let newMessageBody = state.newMessageBody;

        let onNewMessageChange = (event) => {
          let body =  event.target.value;
          props.store.dispatch(updateNewMessageBodyCreator(body));
        };
        let onSendMessageClick = () => {
            props.store.dispatch(sendMessageCreator());
        };

        return (<div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
                    <button onClick={onSendMessageClick}> Отправить</button>
                </div>
            </div>
        )
    }

;
export default Dialogs;


