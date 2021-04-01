import React from 'react';
import s from './Users.module.css';
import Pagination from '../Common/Pagination/Pagination';
import User from './User';

let Users = (props) => {

    return (
        <div className={s.container} >
            <Pagination currentPage={props.currentPage} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} />
            <div>
                {
                    props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)
                }
            </div>
        </div >
    )
}

export default Users;