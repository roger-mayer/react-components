import React from 'react';
import faker from 'faker';

const CommentDetail = (props) =>{
    return  (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author.charAt(0).toUpperCase()+ props.author.slice(1)}
            </a>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">Nice Blog Post!</div>
        </div>
    </div>
        )
};

export default CommentDetail;