import Preloader from "../../common/Preloader/preloader";
import userPhoto from "../../../Components/userPhoto.jpg";
import s from "../profile.module.css"
import ProfileStatus from "./profileStatus";
import {useState} from "react";
import ProfileDataForm from "./profileDataForm";
import handleSubmit from "redux-form/lib/handleSubmit";


function ProfileInfo(props) {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>
                <img
                    src={props.profile.photos.large || userPhoto}
                    className={s.userPhoto}/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full nam:e</b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b>{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b>{profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b>
        {
            contactValue
        }</div>
}

export default ProfileInfo;
