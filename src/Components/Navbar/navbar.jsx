import n from "./navbar.module.css"
import {NavLink} from "react-router-dom";
import s from "../Dialogs/dialogs.module.css";

function Navbar() {
    return (
        <nav className={n.nav}>
            <div className={n.item + ' ' + s.active}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/News">News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/setting">Setting</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;