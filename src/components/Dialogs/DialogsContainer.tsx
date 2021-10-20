import { actions } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { InitialStateType } from '../../redux/dialogsReducer';

type MapDispatchProps = {
  
}

type MapStateProps = {
  dialogsPage: InitialStateType
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
