import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/images.png';
import { NavLink } from 'react-router-dom';
import { UsersType } from '../../types/types';

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
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.users__photo} alt='small' />
                </NavLink>
            </div>
            {user.followed ?
                <button className={s.users__follow} disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => unfollow(user.id)}>Unfollow</button>
                : <button className={s.users__follow} disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => follow(user.id)}>Follow</button>}
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
        </div>)
}

export default User;