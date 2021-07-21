import React from 'react';
import { follow, unfollow, requestUsers } from "../../redux/usersReducer";
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';
import { UsersType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapDispatchProps = {
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    requestUsers: (currentPage: number, pageSize: number) => void,
}

type MapStateProps = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UsersType>,
    followingInProgress: Array<number>,
}

type OwnProps = {}

type Props = MapStateProps & MapDispatchProps;

class UsersContainer extends React.Component<Props> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(
        mapStateToProps,
        {
            follow,
            unfollow,
            requestUsers
        }),
    withAuthRedirect
)(UsersContainer);