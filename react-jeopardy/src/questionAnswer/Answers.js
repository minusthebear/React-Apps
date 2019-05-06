import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';

//style={{backgroundColor: bgColor}}

const Answers = ({answers, onClick, points, player, answered, correctAnswer}) => {

    const setBgColor = (answer) => {
        console.log(answer);
        console.log(correctAnswer);

        if (!answered) {
            return 'non-answer';
        }

        if (correctAnswer.isCorrect && correctAnswer.correctAnswer === answer) {
            return 'correct-answer';
        } else if (!correctAnswer.isCorrect && correctAnswer.correctAnswer === answer) {
            return 'actual-answer'
        } else if (!correctAnswer.isCorrect && correctAnswer.answer === answer) {
            return 'wrong-answer';
        }
        return 'non-answer';
    };

    const clickFunc = (e, answer) => {
        if (answered) {
            e.preventDefault();
            return;
        }
        onClick(answer, points, player);
    };

    return (
        <div className={"col-md-12 answers-div"}>
            {answers.map(
                (answer) => <div key={answer} className="col-md-6" onClick={(e) => clickFunc(e, answer)}>
                    <div className={setBgColor(answer)}>
                        <div>
                            {answer}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};



export default Answers;