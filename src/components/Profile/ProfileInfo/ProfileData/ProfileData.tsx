import { ProfileType, ContactsType } from '../../../../types/types';
import s from './ProfileData.module.css';

type ProfileDataProps = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

type ContactsProps = {
    contactTitle: string
    contactValue: string
}

const ProfileData: React.FC<ProfileDataProps> = ({ profile, isOwner, goToEditMode }) => {
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
                <span>Contacts:</span>
                {Object
                    .keys(profile.contacts)
                    .filter(key => profile.contacts[key as keyof ContactsType]  !== null)
                    .map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                    })
                }
            </div>
            {isOwner && <div><button className={s.profile_edit} onClick={goToEditMode}>Edit</button></div>}
        </div>
    )
}

const Contact: React.FC<ContactsProps> = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>{contactTitle}: {contactValue}</div>
    )
}

export default ProfileData;