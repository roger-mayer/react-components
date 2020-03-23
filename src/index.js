import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="roger"
                    timeAgo="Today at 4:00PM"
                    content="Nice Blog Post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="asher"
                    timeAgo="Today at 2:00PM"
                    content="Heyyyyy"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="riley"
                    timeAgo="Yesterday at 1:00PM"
                    content="What!???!?!?"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>

    )
        ;
};

ReactDOM.render(<App/>, document.querySelector('#root'));
