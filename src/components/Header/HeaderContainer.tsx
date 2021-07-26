import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';

type MapDispatchProps = {
    logout: any,
}

type MapStateProps = {
    isAuth: boolean,
    login: string | null
}

type OwnProps = {}

type Props = MapStateProps & MapDispatchProps;

class HeaderContainer extends React.Component<Props> {
    
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state: AppStateType): MapStateProps => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, { logout })(HeaderContainer);