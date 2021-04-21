import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/images.png';
import ProfileDataForm from './ProfileData/ProfileDataForm';
import ProfileData from './ProfileData/ProfileData';

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }
  return (
    <div>
      <div className={s.description_block}>
        <div className={s.description_photo}>
          <img src={profile.photos.large || userPhoto} alt='large' />
        </div>
        <div className={s.description_file}>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> :
        <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
    </div>
  );
}

export default ProfileInfo;
