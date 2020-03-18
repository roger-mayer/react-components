import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () =>{
    return (
        <div className="ui container comments">
            <CommentDetail author="roger" timeAgo="Today at 4:00PM"/>
            <CommentDetail author="asher" timeAgo="Today at 2:00PM"/>
            <CommentDetail author="riley" timeAgo="Yesterday at 1:00PM"/>



        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));