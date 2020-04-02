import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img src="https://images.wallpaperscraft.com/image/tree_horizon_minimalism_128903_1280x720.jpg" alt=""/></div>
            <div>
                ava + description
            </div>
           <MyPosts/>
        </div>
    );
}
export default Profile;