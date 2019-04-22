import React from 'react';
import './App.css';
import './bootstrap.min.css';

const QuestionMusic = (props) => {

    const qstn = props.question;
    console.log(props);

    const getQuestion = (type) => {
        switch(type) {
            case 'books':
                return (<div>
                    Which song was done by {qstn.nationality} artist {qstn.author}?
                </div>);
            case 'author':
                return (<div>
                    Which {qstn.nationality} author is known for the song "{props.extra.book}"?
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

export default QuestionMusic;