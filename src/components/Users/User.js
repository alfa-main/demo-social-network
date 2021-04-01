import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/images.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div >
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.users__photo} alt='small' />
                    </NavLink>
                </div>
            </span>
            <span>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unfollow(user.id)}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => follow(user.id)}>Follow</button>}
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
            </span>
        </div>)
}


export default User;