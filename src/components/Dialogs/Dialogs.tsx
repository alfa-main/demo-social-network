import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field, reset } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../utils/validator/validators';
import { FormControl } from '../Common/FormControls/FormControls';
import { InitialStateType } from '../../redux/dialogsReducer';

const textarea = FormControl('textarea');
const maxLength50 = maxLengthCreator(50);

type PropsType = {
  dialogsPage: InitialStateType
  sendMessage: any,
}

const Dialogs: React.FC<PropsType> = (props) => {

  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values: any) => {
    props.sendMessage(values.newMessageBody);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_container}>
        <div className={s.dialogs_items}>
          <div>{dialogsElements}</div>
        </div>
        <div className={s.dialogs_items}>
          <div>{messagesElements}</div>
          <AddMessageFormRedux onSubmit={ addNewMessage } />
        </div>
      </div>
    </div>
  );
}

const AddMessageForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.dialogs_message}>
        <Field component={textarea} validate={[requiredField, maxLength50]} name={"newMessageBody"} placeholder={"Enter your message"} />
      </div>
      <div className={s.dialogs_send}>
        <button>Send</button>
      </div>
    </form>
  )
}
// @ts-ignore
const afterSubmit = (dispatch) =>
  dispatch(reset('dialogAddMessageForm'));

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
  onSubmitSuccess: afterSubmit,
})(AddMessageForm);

export default Dialogs;
