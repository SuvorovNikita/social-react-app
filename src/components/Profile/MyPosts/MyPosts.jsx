import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = () => {

    const postData = [
        {id: 1, message: "Hi", like: 15},
        {id: 2, message: "da da", like: 20},
    ];

    let postElement = postData
        .map( post => <Posts message={post.message} like={post.like}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>jfgj</textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;