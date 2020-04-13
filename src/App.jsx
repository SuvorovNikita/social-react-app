import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addPost} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path="/Profile" render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  upDateNewPostText={props.upDateNewPostText}/>}/>
                    <Route path="/Dialogs" render={() => <Dialogs state={props.state.messagesPage}
                                                                  state={props.state.messagesPage}
                                                                 />}/>


                    <Route path="/New" component={New}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
