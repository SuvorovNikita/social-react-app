import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://pinger.kz/storage/files/8e2e294506441fc98ea30493f9803e22.png" alt=""/>
            </header>
            <nav className='nav'>
                <div><a href=".#">Profile</a></div>
                <div><a href=".#">Messages</a></div>
                <div><a href=".#">News</a></div>
                <div><a href=".#">Music</a></div>
                <div><a href=".#">Settings</a></div>
            </nav>
            <div className='content'>
                <div><img src="https://images.wallpaperscraft.com/image/tree_horizon_minimalism_128903_1280x720.jpg"
                          alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>My posts
                    <div>New posts</div>
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
}


export default App;
