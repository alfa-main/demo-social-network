import s from './MyPosts.module.css';
import Post from './Post/Post';
import CreatePost from './CreatePosts/CreatePosts';
import { PostType } from '../../../types/types';

export type MyPostsProps = {
  increaseLike: (postId: number) => void
  decreaseLike: (postId: number) => void
  deletePost: (postId: number) => void
  addPost: (title: string, message: string, image: string) => void
  updatePostMessage: (newPostText: string) => void
  updatePostTitle: (newPostTitle: string) => void
  updatePostImage: (newPostImage: string) => void
  posts: Array<PostType>,
  newPostText: string,
  newPostTitle: string,
  newPostImage: string
}

const MyPosts = (props: MyPostsProps) => {
  let postsElements = props.posts.slice().reverse().map(p => <Post
    post={p}
    key={p.id}
    increaseLike={props.increaseLike}
    decreaseLike={props.decreaseLike}
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
