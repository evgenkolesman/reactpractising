import React from 'react';
import Counter from "./Counter";

const PostComponent = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="post">
                <div className="post_content">
                    <strong>{props.number}. {props.post.titleName}</strong>
                    <div>
                        {props.post.titleDesc}
                    </div>
                </div>
                <div className="post_btns">
                    <button>удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostComponent;