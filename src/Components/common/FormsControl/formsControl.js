import s from './formsControl.module.css'

const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            {props.children}
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}
export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}