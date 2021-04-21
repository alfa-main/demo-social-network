import React, { useState } from 'react';
import s from './CreatePosts.module.css';

const CreatePost = (props) => {

    let [filledFields, setfilledFields] = useState(true);

    const addNewPost = (event) => {
        event.preventDefault();
        if (props.newPostText.length !== 0 && props.newPostTitle.length !== 0) {
            props.addPost(props.newPostTitle, props.newPostText, props.newPostImage);
            setfilledFields(true);
        } else {
            setfilledFields(false);
        }
    }

    const onNewTitleChange = (event) => {
        props.updatePostTitle(event.target.value);
    }

    const onNewMessageChange = (event) => {
        props.updatePostMessage(event.target.value);
    }

    const onNewImageChange = (event) => {
        props.updatePostImage(event.target.value);
    }

    return (
        <div className={s.posts_create}>
            <h2>Create Post</h2>
            <form onSubmit={addNewPost} className={s.posts_form}>
                <div className={s.posts_item}>
                    <div className={s.posts_left}>
                        <div className={s.posts_title}>
                            <p>Title:</p>
                            <input type="text" name="title" onChange={onNewTitleChange} value={props.newPostTitle} />
                        </div>
                        <div className={s.posts_image}>
                            <p>Url image:</p>
                            <input type="text" name="image" onChange={onNewImageChange} value={props.newPostImage} />
                        </div>
                    </div>
                    <div className={s.posts_right}>
                        <textarea name="message" onChange={onNewMessageChange} value={props.newPostText} className="posts__form-right"></textarea>
                        {filledFields ?
                            <div className={s.posts_validate + s.hide}></div> :
                            <div className={s.posts_validate}>Please fill in the title and text fields</div>
                        }
                    </div>
                </div>
                <button className="posts__btn">Add post</button>
            </form>
        </div >
    );
}

export default CreatePost;