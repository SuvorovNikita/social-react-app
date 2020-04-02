import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Nikita
                </div>
                <div className={classes.dialog}>
                    Alisa
                </div>
                <div className={classes.dialog}>
                    Zhenya
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
                <div className={classes.dialog}>
                    Serega
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