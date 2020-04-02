import React from "react";
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
        <div>
            <div className={classes.item}><img src="https://static.zerochan.net/Uchiha.Obito.full.2432796.jpg" alt=""/>{props.message}</div>
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    );
}
export default Posts;