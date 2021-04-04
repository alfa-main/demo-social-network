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
            <div><button>Save</button></div>
            {error && <div className={formStyles.formSummaryError}>
                {error}
            </div>}
            <div>
                Full name: <Field
                    type={'text'}
                    component={input}
                    name={"fullName"}
                    placeholder={"Full name"} />
            </div>
            <div>
                Looking for a job: <Field
                    type={'checkbox'}
                    component={input}
                    name={"lookingForAJob"}
                    placeholder={"looking for a job"} />
            </div>
            <div>
                My professional skills: <Field
                    component={textarea}
                    name={"lookingForAJobDescription"}
                    placeholder={"My professional skills"} />
            </div>
            <div>
                About me: <Field
                    component={textarea}
                    name={"aboutMe"}
                    placeholder={"About me"} />
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                    return <div className={s.contact} key={key}>
                        {key}:  <Field
                            type={'text'}
                            component={input}
                            name={"contacts." + key}
                            placeholder={key} />
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: "editProfile"
})(ProfileDataForm);

export default ProfileDataFormReduxForm;