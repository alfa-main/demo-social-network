import React from 'react';
import s from './ProfileData.module.css';

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div className={s.profile_data}>
            <div className={s.profile_item}>
                <span>Fullname:</span> {profile.fullName}
            </div>
            <div className={s.profile_item}>
                <span>Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div className={s.profile_item}>
                    <span>My professional skills:</span> {profile.lookingForAJobDescription}
                </div>
            }
            <div className={s.profile_item}>
                <span>About me:</span> {profile.aboutMe}
            </div>
            <div className={s.profile_item}>
                <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
            {isOwner && <div><button className={s.profile_edit} onClick={goToEditMode}>Edit</button></div>}
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>{contactTitle}: {contactValue}</div>
    )
}

export default ProfileData;