import React from 'react';
import './App.css';
import './bootstrap.min.css';

const Answers = ({answers, onClick, bgColor}) => {

    return (
        <div className="col-md-5 answers-div" style={{backgroundColor: bgColor}}>
            {answers.map((answer) => <div key={answer} onClick={() => onClick(answer)}>
                <div>{answer}</div>
            </div>)}
        </div>
    );
}



export default Answers;