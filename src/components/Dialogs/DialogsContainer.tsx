import { actions } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';

type MapDispatchProps = {
  
}

type MapStateProps = {
  dialogsPage: any
}

type OwnProps = {}

type Props = MapStateProps & MapDispatchProps;

let mapStateToProps = (state: AppStateType): MapStateProps => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(actions.sendMessageActionCreator(newMessageBody));
    }
  }
}

export default compose(
  connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
