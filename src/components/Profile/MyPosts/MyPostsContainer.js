import { addPost, updatePostMessage, updatePostTitle, updatePostImage, increaseLike, decreaseLike, deletePost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostMessage,
        newPostTitle: state.profilePage.newPostTitle,
        newPostImage: state.profilePage.newPostImage,
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, updatePostMessage, updatePostTitle, updatePostImage, increaseLike, decreaseLike, deletePost })(MyPosts);

export default MyPostsContainer;