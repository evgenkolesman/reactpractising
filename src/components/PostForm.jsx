import React, {useCallback, useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({titleName: '', titleDesc: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        // const newPost = {id: Date.now(), titleName, titleDesc}
        // console.log(newPost)
        const newPost = {...post, id: Date.now()};
        create(newPost);
        setPost({titleName: '', titleDesc: ''});
    }
    return (
        <form>
            <MyInput
                value={post.titleName}
                onChange={e => setPost({...post, titleName: e.target.value})}

                type="text"
                placeholder="Post name"
            />

            <MyInput
                value={post.titleDesc}
                onChange={e => setPost({...post, titleDesc: e.target.value})}
                type="text"
                placeholder="Post description"
            />
            <MyButton onClick={useCallback(addNewPost)}>
                Create post
            </MyButton>
        </form>
    );
};

export default PostForm;