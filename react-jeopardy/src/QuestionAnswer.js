import React, {useState} from 'react';
import './App.css';
import './bootstrap.min.css';
import Answers from './Answers';
import Question from './Question';
import NextQuestionButton from './NextQuestionButton';

const QuestionAnswer = ({subject, answers, type, extra, bgColor, selectAnswer, showButton, showNextQuestion}) => {
    console.log(subject);
    console.log(answers);
    return (
      <div className="container">
        <div className="row">
            <Question question={subject} type={type} extra={extra} />
            <Answers answers={answers} onClick={selectAnswer} bgColor={bgColor}/>
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
