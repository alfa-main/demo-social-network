import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../utils/validator/validators';
import { FormControl } from '../Common/FormControls/FormControls';

const textarea = FormControl('textarea');
const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to={"/login"} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMesageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

const AddMesageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={textarea} validate={[requiredField, maxLength50]} name={"newMessageBody"} placeholder={"Enter your message"} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMesageFormRedux = reduxForm({
  form: "dialogAddMesageForm"
})(AddMesageForm);

export default Dialogs;
