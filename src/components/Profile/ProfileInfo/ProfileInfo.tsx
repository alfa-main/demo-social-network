import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/images.png';
import ProfileDataForm from './ProfileData/ProfileDataForm';
import ProfileData from './ProfileData/ProfileData';
import { ProfileProps } from '../Profile';
import { Button, Col, Image, Row, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ProfileInfo: React.FC<ProfileProps> = ({ profile, updateStatus, statusUser, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (info: any) => {
    console.log(info)
    // @ts-ignore
    if (info?.fileList?.length) {
      // @ts-ignore
      savePhoto(info.fileList);
    }
  }

  const onSubmit = (formData: any) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  }
  return (
    <Row>
      <Col span={12} className={s.flex_container}>
        <Row>
          <Image src={profile.photos.large || userPhoto} alt='large' width={270} />
        </Row>
        <Row>
          {isOwner &&
            <Upload name="file" onChange={onMainPhotoSelected} maxCount={1} disabled={true} listType={'picture'}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          }
        </Row>
        <Row>
          <ProfileStatusWithHooks statusUser={statusUser} updateStatus={updateStatus} isOwner={isOwner} />
        </Row>
      </Col>
      <Col span={12}>
        {// @ts-ignore
          editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> :
            <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
      </Col>
    </Row>
  );
}

export default ProfileInfo;
