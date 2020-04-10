import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}  upDateNewPostText={props.upDateNewPostText} newPostText={props.profilePage.newPostText} addPost={props.addPost} />
        </div>
    );
}
export default Profile;