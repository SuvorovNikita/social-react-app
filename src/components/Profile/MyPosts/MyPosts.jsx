import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {

    const postData = [
        {id: 1, message: "Hi" , like:15},
        {id: 2, message: "da da", like: 20},
    ];
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div className={classes.posts}>
                <Posts message={postData[0].message} like={postData[0].like}/>
                <Posts message={postData[1].message} like={postData[1].like}/>
            </div>
        </div>
    );
}
export default MyPosts;