import React from 'react';
import './QuestionAnswer.scss';
import '../bootstrap.min.css';

const QuestionCuisine = (props) => {

    const qstn = props.question;

    const getQuestion = (type) => {
        switch(type) {
            case 'food':
                return (<div>
                    Which dish would you find in a restaurant serving {qstn.cuisine} cuisine?
                </div>);
            case 'cuisine':
                return (<div>
                    In which kind of restaurant could you order {props.extra.food}?
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

export default QuestionCuisine;