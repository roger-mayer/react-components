import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () =>{
    return (
        <div className="ui container comments">
            <CommentDetail author="Roger"/>
            <CommentDetail author="Asher"/>
            <CommentDetail author="Riley"/>



        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));