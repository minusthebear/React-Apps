import React from 'react';
import './QuestionAnswer.scss';
import '../bootstrap.min.css';

const QuestionBooks = (props) => {

    const qstn = props.question;

    const getQuestion = (type) => {
        switch(type) {
            case 'books':
                return (<div>
                    Which book was written by {qstn.nationality} author {qstn.author}?
                </div>);
            case 'author':
                return (<div>
                    Which {qstn.nationality} author is known for the book "{props.extra.book}"?
                </div>);
        }
    };

    return (
        <div className="question-div col-md-5 col-offset-1">
            <div>
                { getQuestion(props.type) }
            </div>
        </div>
    );
}

export default QuestionBooks;