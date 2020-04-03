import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return (<div>
            <div><img src="https://images.wallpaperscraft.com/image/tree_horizon_minimalism_128903_1280x720.jpg" alt=""/></div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;