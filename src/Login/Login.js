import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormControl } from '../components/Common/FormControls/FormControls';
import { requiredField } from '../utils/validator/validators';
import { login } from '../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from '../components/Common/FormControls/FormControls.module.css';

const inp = FormControl('input')

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field type={"text"} placeholder={"Email"} name={"email"} component={inp} validate={requiredField} />
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={inp} validate={requiredField} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={inp} /> remember me
                </div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);