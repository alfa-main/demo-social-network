import { actions } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { PostType } from '../../../types/types';

type MapDispatchProps = {
    increaseLike: (postId: number) => void
    decreaseLike: (postId: number) => void
    deletePost: (postId: number) => void
    addPost: (title: string, message: string, image: string) => void
    updatePostMessage: (newPostText: string) => void
    updatePostTitle: (newPostTitle: string) => void
    updatePostImage: (newPostImage: string) => void
}

type MapStateProps = {
    posts: Array<PostType>,
    newPostText: string,
    newPostTitle: string,
    newPostImage: string
}

type OwnProps = {}

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostMessage,
        newPostTitle: state.profilePage.newPostTitle,
        newPostImage: state.profilePage.newPostImage,
    }
}

const MyPostsContainer = connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, { ...actions })(MyPosts);

export default MyPostsContainer;