import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validator/validators';
import { FormControl } from '../../Common/FormControls/FormControls';

const textarea = FormControl('textarea');
const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  }

  return (
    <div className={s.posts_block}>
      <div>
        My posts
        <AddNewPostFormRedux onSubmit={addNewPost} />
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
}


const AddNewPostForm = React.memo((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={textarea} validate={[requiredField, maxLength10]} name={"newPostBody"} placeholder={"Enter your Post"} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
})

const AddNewPostFormRedux = reduxForm({
  form: "profileAddPostForm"
})(AddNewPostForm);

export default MyPosts;
