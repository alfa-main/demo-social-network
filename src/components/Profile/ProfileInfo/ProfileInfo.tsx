import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/images.png';
import ProfileDataForm from './ProfileData/ProfileDataForm';
import ProfileData from './ProfileData/ProfileData';
import cn from 'classnames';
import { ProfileProps } from '../Profile';

const ProfileInfo: React.FC<ProfileProps> = ({ profile, updateStatus, statusUser, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    if (e.target.files.length) {
      // @ts-ignore
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData: any) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }
  return (
    <div className={
      cn({
        [s.flex_container]: !editMode
      }, {
        [s.description_container]: editMode
      }, s.description_block)}>
      <div className={s.profile_left}>
        <div className={s.description_photo}>
          <img src={profile.photos.large || userPhoto} alt='large' />
        </div>
        <div className={s.description_file}>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <ProfileStatusWithHooks statusUser={statusUser} updateStatus={updateStatus} isOwner={isOwner} />
      </div>
      <div className={s.profile_right}>
        {// @ts-ignore
          editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> :
          <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
      </div>
    </div>
  );
}

export default ProfileInfo;
