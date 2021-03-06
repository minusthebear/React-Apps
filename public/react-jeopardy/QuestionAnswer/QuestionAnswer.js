import React, {useState} from 'react';
import './QuestionAnswer.scss';
import '../bootstrap.min.css';
import Answers from './Answers';
import QuestionMusic from './QuestionMusic';
import QuestionBooks from './QuestionBooks';
import QuestionDirectors from './QuestionDirectors';
import QuestionNations from './QuestionNations';
import NextQuestionButton from '../common/NextQuestionButton';
import QuestionDisneyFilms from './QuestionDisneyFilms';
import QuestionCuisine from './QuestionCuisine';

const QuestionAnswer = (props) => {

    const {category, subject, answers, type, extra, points, selectAnswer, showButton, player, showNextQuestion, correctAnswer} = props;

    const getQuestionCategory = (category, subject, type, extra) => {
        switch (category) {
            case 'Music':
                return (<QuestionMusic question={subject} type={type} extra={extra} />);
            case 'Books':
                return (<QuestionBooks question={subject} type={type} extra={extra} />);
            case 'Directors':
                return (<QuestionDirectors question={subject} type={type} extra={extra} />);
            case 'Nations':
                return (<QuestionNations question={subject} type={type} extra={extra} />);
            case 'Disney Films':
                return (<QuestionDisneyFilms question={subject} type={type} extra={extra} />);
            case 'Cuisine':
                return (<QuestionCuisine question={subject} type={type} extra={extra} />);
        }
    };

    const template = getQuestionCategory(category, subject, type, extra);

    return (
        <>
            <div className="row">
                <div className="category-grid-container">
                    { template }
                    <Answers answers={answers} onClick={selectAnswer} points={points} player={player} answered={showButton} correctAnswer={correctAnswer}/>
                </div>
            </div>
            <div className="row">
                <NextQuestionButton onClick={showNextQuestion} show={showButton}/>
            </div>
        </>
    );
};

export default QuestionAnswer;
