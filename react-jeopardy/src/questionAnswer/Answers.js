import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';

//style={{backgroundColor: bgColor}}

const Answers = ({answers, onClick, bgColor, points, player}) => {
    return (
        <div className="col-md-12 answers-div" >
            {answers.map(
                (answer) => <div key={answer} className="col-md-6" onClick={() => onClick(answer, points, player)}>
                    <div>
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