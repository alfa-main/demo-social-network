import React from 'react';
import s from './ProfileData.module.css';

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div>
                Fullname: {profile.fullName}
            </div>
            <div>
                Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    My professional skills: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                About me: {profile.aboutMe}
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>{contactTitle}: {contactValue}</div>
    )
}

export default ProfileData;