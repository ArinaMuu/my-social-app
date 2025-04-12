import s from "./dialogs.module.css";
import DialogsItem from "./DialogsItem/dialogsItem";
import MessagesItem from "./MessagesItem/messagesItem";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/formsControl";
import {maxLengthCreator, required} from "../../utils/validators";

function Dialogs({dialogsPage, sendMessage}) {
    let state = dialogsPage;
    let dialogsElement =
        state.dialogsData.map( d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElement =
        state.messagesData.map( m => <MessagesItem message={m.message} id={m.id} />)

    let addNewMessage = (values) => {
        sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

let maxLength10 = maxLengthCreator(10)

let AddMessageForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name='newMessageBody' component={Textarea} placeholder='Write a message'
                   validate={[required, maxLength10]}/>
            <button>Click</button>
        </form>
    )
}

let AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

export default Dialogs;