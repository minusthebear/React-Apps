import React from 'react';
import './QuestionAnswer.scss';
import '../bootstrap.min.css';

const QuestionNations = (props) => {

    const qstn = props.question;

    const getQuestion = (type) => {
        switch(type) {
            case 'cities':
                return (<div>
                    Which city can be found in {qstn.nation}?
                </div>);
            case 'landmarks':
                return (<div>
                    Which landmark can be found in {qstn.nation}?
                </div>);
            case 'nation':
                return (<div>
                    Which nation can you find the landmark {props.extra.landmark}?
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
}

export default QuestionNations;