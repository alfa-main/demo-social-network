import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  let validateUrlImg = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

  const onDelPost = () => {
    props.deletePost(props.post.id);
  }

  return (
    <div className={s.post}>
      <div className={s.post_img}>
        {props.post.image.match(validateUrlImg) === null ?
          <img src={props.post.image} alt="img post" className="hide" /> :
          <img src={props.post.image} alt="img post" />
        }
      </div>

      <div className={s.post_title}>
        <h4>{props.post.title}</h4>
      </div>

      <div className={s.post_message}>
        <p>{props.post.message}</p>
      </div>

      <div className={s.post_likes}>
        {props.post.liked ?
          <button className={s.background_red} onClick={() => { props.decreaseLike(props.post.id) }}>Like</button> :
          <button onClick={() => { props.increaseLike(props.post.id) }}>Like</button>}
        <p>Like: <span>{props.post.likesCount}</span></p>
      </div>
      <button className={s.post_delete} onClick={onDelPost}>Delete post</button>
    </div>
  );
}

export default Post;

