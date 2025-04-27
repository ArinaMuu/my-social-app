import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/formsControl";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../Redux/auth-reducer";
import s from "../../Components/common/FormsControl/formsControl.module.css"
import createField from "redux-form/lib/createField";

let LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/>Remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && createField ("Symbols from image", "captcha", [required], Input)}
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)