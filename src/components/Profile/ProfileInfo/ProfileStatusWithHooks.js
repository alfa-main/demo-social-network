import React, { useState, useEffect } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.profile_status}>
            {!editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>
                        {!props.status ? "---" : props.status}
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