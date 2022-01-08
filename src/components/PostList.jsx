import React from 'react';
import PostComponent from "./PostComponent";
import Counter from "./Counter";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1
                style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostComponent number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
}

export default PostList;