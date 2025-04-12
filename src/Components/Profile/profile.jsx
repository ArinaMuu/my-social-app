import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./My posts/mypostsContainer";
import {saveProfile} from "../../Redux/profile-reducer";

function Profile({profile, status, updateStatus, store, isOwner, savePhoto}) {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                         savePhoto={savePhoto} saveProfile={saveProfile}/>
            <MyPostsContainer store={store}/>
        </div>
    );
}

export default Profile;