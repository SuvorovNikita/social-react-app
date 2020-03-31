import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img src="https://images.wallpaperscraft.com/image/tree_horizon_minimalism_128903_1280x720.jpg"
                      alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>My posts
                <div>New posts</div>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    );
}
export default Profile;