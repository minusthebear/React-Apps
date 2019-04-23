import React from 'react';
import './App.css';
import './bootstrap.min.css';

const QuestionBooks = (props) => {

    return (
        <div className="col-md-10 col-offset-1">
            <h2>
                { props.totalPoints }
            </h2>
        </div>
    );
}

export default QuestionBooks;