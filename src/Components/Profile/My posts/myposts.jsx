import Post from "./Post/post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControl/formsControl";

function MyPosts({postData, addPost}) {
    let postElements =
        postData.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

    const onAddPost = (values) => {
        addPost(values.newPostText);
    }

    return (
        <div>
            My posts
            <div>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}

let maxLength10 = maxLengthCreator(10)
let AddNewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name='newPostText' component={Textarea} validate={[required, maxLength10]}/>
            <button>Click</button>
        </form>
    )
}

AddNewPostForm = (reduxForm({form: 'ProfileAddNewPostForm'}))(AddNewPostForm)

export default MyPosts;