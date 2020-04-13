import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";

const MyPosts = (props) => {

    let postElement = props.postData
        .map(post => <Posts message={post.message} like={post.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.upDateNewPostText(text);
    };


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
};
export default MyPosts;