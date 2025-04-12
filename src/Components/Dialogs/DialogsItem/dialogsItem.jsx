import s from "../dialogs.module.css"
import {NavLink} from "react-router-dom";

function DialogsItem(props) {
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;