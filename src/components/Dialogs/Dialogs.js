import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>

    )
};

const Dialogs = (props) => {
    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name="Nikita" id="1"/>
                <DialogItem name="Alisa" id="2"/>
                <DialogItem name="Zheka" id="3"/>
                <DialogItem name="Serega" id="4"/>
                <DialogItem name="Masha" id="5"/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="kak dela?"/>
                <Message message="good"/>
            </div>
        </div>
    )
};
export default Dialogs;