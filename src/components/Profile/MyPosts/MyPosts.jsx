import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = (props) => {


    let postElement = props.postData
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