import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostComponent from "./components/PostComponent";
import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    // let likes = 0;
    const [posts, setPosts] = useState([
        {id: 1, titleName: 'JavaScript', titleDesc: 'js - code language'},
        {id: 2, titleName: 'Java', titleDesc: 'java - backend code language'},
        {id: 3, titleName: 'Python', titleDesc: 'python - backend code language'}
    ]);

    let title = 'List Posts';

    //неуправляемый компонент через ref
    // const titleInputRef = useRef("");
    // const bodyInputRef = useRef("");

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        console.log(newPost);
    };

    return (
        <div className="App">
            <PostForm create = {createPost}/>
            <PostList posts={posts} title={title}/>
        </div>
        // <p>Likes count</p>,
        // <Counter/>
    );
}

export default App;