import s from "../dialogs.module.css"

function MessagesItem(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default MessagesItem;