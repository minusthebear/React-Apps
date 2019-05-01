import React, {useState} from 'react';
import './QuestionAnswer.scss';
import '../bootstrap.min.css';
import Answers from './Answers';
import QuestionMusic from './QuestionMusic';
import QuestionBooks from './QuestionBooks';
import QuestionDirectors from './QuestionDirectors';
import QuestionNations from './QuestionNations';
import NextQuestionButton from '../common/NextQuestionButton';

const QuestionAnswer = (props) => {

    const {category, subject, answers, type, extra, bgColor, points, selectAnswer, showButton, player, showNextQuestion} = props;

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
        }
    };

    const template = getQuestionCategory(category, subject, type, extra);

    return (
      <div className="container">
        <div className="row">
            { template }
            <Answers answers={answers} onClick={selectAnswer} bgColor={bgColor} points={points} player={player} />
        </div>
        <div className="row">
            <div className="col-md-12">
                <NextQuestionButton onClick={showNextQuestion} show={showButton}/>
            </div>
        </div>
      </div>
    );
}

export default QuestionAnswer;
