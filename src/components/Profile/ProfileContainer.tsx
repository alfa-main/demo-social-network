import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { AppStateType } from '../../redux/redux-store';
import { RouteComponentProps } from 'react-router';
import { ProfileType } from '../../types/types';

type MapDispatchProps = {
    getUserProfile: (userId: number) => void;
    getStatus: (userId: number) => void;
    updateStatus: (status: string) => void;
    savePhoto: (file: File) => void;
    saveProfile: (profile: ProfileType) => void;
}

type MapStateProps = {
    profile: ProfileType | null,
    status: string,
    authorizedUserId: number | null,
    isAuth: boolean
}

type PathParamsType = {
    userId: string
}

type Props = MapStateProps & MapDispatchProps & RouteComponentProps<PathParamsType>;
class ProfileContainer extends React.Component<Props> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getUserProfile(userId as number);
        this.props.getStatus(userId as number);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Props, prevState: Props) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    async handleSaveProfile(profile: ProfileType) {
        this.props.saveProfile(profile)
    }
    
    async handleSavePhoto(file: File) {
        this.props.savePhoto(file)
    }

    render() {

        return (
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                statusUser={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.handleSavePhoto.bind(this)}
                saveProfile={this.handleSaveProfile.bind(this)} />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose<React.ComponentType>(
    connect<MapStateProps, MapDispatchProps, {}, AppStateType>(mapStateToProps, { getUserProfile, getStatus, saveProfile, savePhoto, updateStatus }),
    withRouter
)(ProfileContainer);

// export default compose<React.ComponentType>(
//     connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
//     withRouter
// )(ProfileContainer);