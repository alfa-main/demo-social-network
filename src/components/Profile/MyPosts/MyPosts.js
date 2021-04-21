import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import CreatePost from './CreatePosts/CreatePosts';

const MyPosts = (props) => {
  let postsElements = props.posts.slice().reverse().map(p => <Post
    post={p}
    key={p.id}
    increaseLike={props.increaseLike}
    descreaseLike={props.descreaseLike}
    deletePost={props.deletePost}
  />);

  return (
    <div className={s.posts_block}>
      <CreatePost
        addPost={props.addPost}
        newPostText={props.newPostText}
        newPostTitle={props.newPostTitle}
        newPostImage={props.newPostImage}
        updatePostMessage={props.updatePostMessage}
        updatePostTitle={props.updatePostTitle}
        updatePostImage={props.updatePostImage}
      />
      <div className={s.posts}>
        <h2>My posts</h2>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
