import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { actions, getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { AppStateType } from '../../redux/redux-store';
import { RouteProps } from 'react-router';
import { ProfileType } from '../../types/types';

type MapDispatchProps = {
    getUserProfile: (userId: number) => void,
    getStatus: (userId: number | undefined) => void,
    updateStatus: (status: string) => void,
    savePhoto: (photo: any) => void,
    saveProfile: (profile: ProfileType) => any
}

type MapStateProps = {
    profile: ProfileType,
    status: string,
    authorizedUserId: number | null,
    isAuth: boolean
}

type OwnProps = {}

type Props = MapStateProps & MapDispatchProps;

class ProfileContainer extends React.Component<Props & RouteProps> {

    refreshProfile() {
        // @ts-ignore
        let userId: any = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        // @ts-ignore
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                // @ts-ignore
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                statusUser={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateProps => ({
    // @ts-ignore
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    //@ts-ignore
    connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, { getUserProfile, getStatus, saveProfile, savePhoto, updateStatus, ...actions }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
