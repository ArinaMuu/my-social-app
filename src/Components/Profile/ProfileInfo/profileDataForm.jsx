import createField from "redux-form/lib/createField";
import {Input, Textarea} from "../../common/FormsControl/formsControl";
import {reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import s from "../../common/FormsControl/formsControl.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
        </div>
        <div>
            <b>Full name:</b>{createField("Full Name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b>{createField("", "lookinkForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills:</b>
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <div><b>key</b>: {createField(key, "contacts." + key, [], Input)}</div>
        })}
        </div>
    </form>
}

let ProfileReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileReduxForm