import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";



const MyPosts = (props) => {

    let postElement = props.postData
        .map(post => <Posts message={post.message} like={post.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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