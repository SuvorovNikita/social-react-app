import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div>My posts</div>
            <textarea></textarea>
            <button>add post</button>
            <div className={classes.posts}>
                <Posts/>
                <Posts/>
            </div>
        </div>
    );
}
export default MyPosts;