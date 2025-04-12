import s from "../../../Dialogs/dialogs.module.css";

function Post(props) {
    return (
        <div>
            <img src="https://i.pinimg.com/originals/89/d1/3c/89d13c57e31571b6bb52306f3ac942ad.jpg" alt="avatar"
                 width="50" height="50"/>
            <div className={s.message}>{props.message + props.likesCount}</div>
        </div>
    );
}

export default Post;