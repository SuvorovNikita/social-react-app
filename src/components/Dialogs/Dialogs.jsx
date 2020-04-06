import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

        const dialogsData = [
            {id: 1, name: "Nikita"},
            {id: 2, name: "Alisa"},
            {id: 3, name: "Zheka"},
            {id: 4, name: "Serega"},
            {id: 5, name: "Masha"},
        ];
        const messagesData = [
            {id: 1, message: "Hi"},
            {id: 2, message: "kak dela?"},
            {id: 3, message: "good"},
        ];

        let dialogElements = dialogsData
            .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

        let messagesElements = messagesData
            .map(message => <Message message={message.message}/>);

        return (<div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        )
    }
;
export default Dialogs;


