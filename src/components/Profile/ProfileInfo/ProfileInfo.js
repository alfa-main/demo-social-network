import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, updateStatus, status }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img className={s.content_img} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="icon" />
      </div>
      <div className={s.description_block}>
        <img src={profile.photos.large} alt='large' />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;
