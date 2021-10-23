import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { UsersType } from '../../types/types';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';

type Props = {
    user: UsersType,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

let User: React.FC<Props> = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div className={s.users}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    {user.photos.small
                        ? <Image src={user.photos.small} className={s.users__photo} alt='small' />
                        : <Avatar shape="square" size={64} icon={<UserOutlined />} />
                    }
                </NavLink>
            </div>
            {user.followed ?
                <Button type={'primary'} className={s.users__follow} disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => unfollow(user.id)}>Unfollow</Button>
                : <Button type={'primary'} className={s.users__follow} disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => follow(user.id)}>Follow</Button>}
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
        </div>)
}

export default User;