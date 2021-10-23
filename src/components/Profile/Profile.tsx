import React from 'react';
import { ProfileType } from '../../types/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfileProps = {
  saveProfile: (profile: ProfileType) => Promise<any>,
  savePhoto: (file: File) => Promise<any>,
  isOwner: boolean,
  profile: ProfileType | null,
  statusUser: string,
  updateStatus: (status: string) => void
}

const Profile: React.FC<ProfileProps> = ({
  saveProfile,
  savePhoto,
  isOwner,
  profile,
  statusUser,
  updateStatus }) => {

  return (
    <div>
      <ProfileInfo
        saveProfile={saveProfile}
        savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        statusUser={statusUser}
        updateStatus={updateStatus}
      />
      {isOwner && <MyPostsContainer />}
    </div>
  );
}

export default Profile;
