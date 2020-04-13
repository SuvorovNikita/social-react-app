import React, {createRef} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

        let dialogElements = props.state.dialogsData
            .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

        let messagesElements = props.state.messagesData
            .map(message => <Message message={message.message}/>);

        return (<div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <textarea></textarea>
                    <button> Отправить</button>
                </div>
            </div>
        )
    }
;
export default Dialogs;


