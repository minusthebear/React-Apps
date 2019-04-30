import React from 'react';
import './App.scss';
import './bootstrap.min.css';

const Answers = ({answers, onClick, bgColor, points, player}) => {
    return (
        <div className="col-md-5 answers-div" style={{backgroundColor: bgColor}}>
            {answers.map(
                (answer) => <div key={answer} onClick={() => onClick(answer, points, player)}>
                    <div>{answer}</div>
                </div>
            )}
        </div>
    );
};



export default Answers;