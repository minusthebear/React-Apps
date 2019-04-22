import React, {useState} from 'react';
import './App.css';
import './bootstrap.min.css';
import Answers from './Answers';
import QuestionMusic from './QuestionMusic';
import QuestionBooks from './QuestionBooks';
import NextQuestionButton from './NextQuestionButton';

const QuestionAnswer = ({category, subject, answers, type, extra, bgColor, selectAnswer, showButton, showNextQuestion}) => {

    const getQuestionCategory = (category) => {
        switch (category) {
            case 'Music':
                return <QuestionMusic question={subject} type={type} extra={extra} />;
            case 'Books':
                return <QuestionBooks question={subject} type={type} extra={extra} />;
        }
    };

    return (
      <div className="container">
        <div className="row">
            { getQuestionCategory(category) }
            {/*<Answers answers={answers} onClick={selectAnswer} bgColor={bgColor}/>*/}
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
