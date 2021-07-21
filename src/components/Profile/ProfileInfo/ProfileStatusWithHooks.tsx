import React, { useState, useEffect } from 'react';
import s from './ProfileStatus.module.css';

type Props = {
    status2: string,
    updateStatus: (status: string) => void,
    isOwner: boolean
}

// type State = {
//     editMode: boolean,
//     status: string
// }

const ProfileStatusWithHooks: React.FC<Props> = ({status2, updateStatus, isOwner}) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(status2);

    useEffect(() => {
        setStatus(status2)
    }, [status2]);

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
                        {!status2 ? "---" : status2}
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