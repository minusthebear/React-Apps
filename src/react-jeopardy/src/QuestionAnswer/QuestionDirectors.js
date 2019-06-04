import React from 'react';
import './QuestionAnswer.scss';
import '../bootstrap.min.css';

const QuestionDirectors = (props) => {

    const qstn = props.question;

    const getQuestion = (type) => {
        switch(type) {
            case 'films':
                return (<div>
                    Which film was directed by {qstn.nationality} director {qstn.director}?
                </div>);
            case 'director':
                return (<div>
                    Which {qstn.nationality} director is known for the film "{props.extra.film}"?
                </div>);
        }
    };

    return (
        <div className="question-div col-md-12">
            <div>
                { getQuestion(props.type) }
            </div>
        </div>
    );
};

export default QuestionDirectors;