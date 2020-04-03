import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                  <NavLink to="/dialogs/1">Nikita</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Serega</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Alisa</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Zheka</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>kak dela?</div>
                <div className={classes.message}>лялялял</div>
            </div>
        </div>
    )
};
export default Dialogs;