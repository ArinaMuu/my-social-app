import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/dialogsContainer";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer, {withRouter} from "./Components/Profile/profileContainer";
import HeaderContainer from "./Components/Header/headerContainer";
import Login from "./Components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
           return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="app-container">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-container-content">
                        <Routes>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, {initializeApp})) (App);
