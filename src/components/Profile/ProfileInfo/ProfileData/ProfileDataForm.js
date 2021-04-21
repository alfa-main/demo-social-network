import React from 'react';
import s from './ProfileDataForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { FormControl } from '../../../Common/FormControls/FormControls';
import formStyles from '../../../Common/FormControls/FormControls.module.css';

const input = FormControl('input');
const textarea = FormControl('textarea');

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={formStyles.formSummaryError}>
                {error}
            </div>}
            <div className={s.profile_form}>
                <p>Full name:</p> <Field
                    type={'text'}
                    component={input}
                    name={"fullName"}
                    placeholder={"Full name"} />
            </div>
            <div className={s.profile_form}>
                <p>Looking for a job:</p> <Field
                    type={'checkbox'}
                    component={input}
                    name={"lookingForAJob"}
                    placeholder={"looking for a job"} />
            </div>
            <div className={s.profile_form}>
                <p>My professional skills:</p> <Field
                    component={textarea}
                    name={"lookingForAJobDescription"}
                    placeholder={"My professional skills"} />
            </div>
            <div className={s.profile_form}>
                <p>About me:</p> <Field
                    component={textarea}
                    name={"aboutMe"}
                    placeholder={"About me"} />
            </div>
            <div className={s.profile_form}>
                <p className={s.contacts_caption}>Contacts:</p> {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contact} key={key}>
                        <div className={s.profile_contacts}>
                            <span>{key}:</span>  <Field
                                type={'text'}
                                component={input}
                                name={"contacts." + key}
                                placeholder={key} />
                        </div>
                    </div>
                })}
            </div>
            <div>
                <button className={s.profile_save}>Save</button>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: "editProfile"
})(ProfileDataForm);

export default ProfileDataFormReduxForm;