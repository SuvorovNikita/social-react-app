import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {
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
                <Posts message='Hi' like='15'/>
                <Posts message='da da' like='20'/>
            </div>
        </div>
    );
}
export default MyPosts;