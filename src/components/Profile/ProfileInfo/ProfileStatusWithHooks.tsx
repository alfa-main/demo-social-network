import React, { useState, useEffect, ChangeEvent } from 'react';
import s from './ProfileStatus.module.css';

type Props = {
    statusUser: string,
    updateStatus: (status: string) => void,
    isOwner: boolean
}

const ProfileStatusWithHooks: React.FC<Props> = ({statusUser, updateStatus, isOwner}) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(statusUser);

    useEffect(() => {
        setStatus(statusUser)
    }, [statusUser]);

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true);
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.profile_status}>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>
                        {!statusUser ? "---" : statusUser}
                    </span>
                </div>
                : <div>
                    <input className={s.status_input} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} defaultValue={status} />
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;