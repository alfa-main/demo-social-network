import { Button, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
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
                <Text strong>
                    Fullname: <Text italic className={s.textData}>{profile.fullName}</Text>
                </Text>
            </div>
            <div className={s.profile_item}>
                <Text strong>
                    Looking for a job: <Text italic className={s.textData}>{profile.lookingForAJob ? "yes" : "no"}</Text>
                </Text>
            </div>
            {profile.lookingForAJob &&
                <div className={s.profile_item}>
                    <Text strong>
                        My professional skills: <Text italic className={s.textData}>{profile.lookingForAJobDescription}</Text>
                    </Text>
                </div>
            }
            <div className={s.profile_item}>
                <Text strong>
                    About me:<Text italic className={s.textData}> {profile.aboutMe}</Text>
                </Text>
            </div>
            <div className={s.profile_item}>
                <Text strong>Contacts:
                {Object
                        .keys(profile.contacts)
                        .filter(key => profile.contacts[key as keyof ContactsType] !== null)
                        .map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                        })
                    }
                </Text>
            </div>
            {isOwner && <Button type="primary" className={s.profile_edit} onClick={goToEditMode}>Edit</Button>}
        </div>
    )
}

const Contact: React.FC<ContactsProps> = ({ contactTitle, contactValue }) => {
    return (
        <Row className={s.contact}>{contactTitle}: {contactValue}</Row>
    )
}

export default ProfileData;