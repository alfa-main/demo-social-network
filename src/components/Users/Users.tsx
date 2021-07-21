import React from 'react';
import s from './Users.module.css';
import Pagination from '../Common/Pagination/Pagination';
import User from './User';
import { UsersType } from '../../types/types';

type Props = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UsersType>,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

let Users: React.FC<Props> = (
    {
        currentPage,
        totalUsersCount,
        pageSize,
        onPageChanged,
        users,
        followingInProgress,
        unfollow,
        follow
    }) => {

    return (
        <div className={s.container} >
            <Pagination
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(u =>
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            unfollow={unfollow}
                            follow={follow}
                        />)
                }
            </div>
        </div >
    )
}

export default Users;