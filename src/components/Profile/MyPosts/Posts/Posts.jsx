import React from "react";
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div>
            <div className={classes.item}><img src="https://static.zerochan.net/Uchiha.Obito.full.2432796.jpg" alt=""/>post 1</div>
            <div>
                <span>like</span>
            </div>

        </div>
    );
}
export default Posts;