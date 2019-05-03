import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';

const NextQuestionButton = (props) => {
    return (
        <>
            <div className="col-md-12 next-question-button-container">
                <div className="col-12">

                    {props.show
                        ?
                        <button className="btn btn-primary btn-lg" onClick={props.onClick}>Back to the quiz grid</button>
                        :
                        null
                    }
                </div>
            </div>
        </>
    );
};

export default NextQuestionButton;