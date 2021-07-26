import { actions } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import React from 'react';

type MapDispatchProps = {
  
}

type MapStateProps = {
  dialogsPage: any
}

type OwnProps = {}


let mapStateToProps = (state: AppStateType): MapStateProps => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose<React.ComponentType>(
  connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, {...actions}),
  withAuthRedirect
)(Dialogs);
