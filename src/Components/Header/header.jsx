import h from "./header.module.css";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className={h.header}>
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/07/logo-2.png?auto=format&q=60&fit=max&w=930" width="100px" alt="logo" />
            <div className={h.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}<button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
}

export default Header;