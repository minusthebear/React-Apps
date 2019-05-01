import React from 'react';
import '../MainGrid.scss';
import './bootstrap.min.css';

const NextQuestionButton = (props) => {
    return (
        <>
        {props.show
            ?
            <div className="col-11">
                <button className="btn btn-primary btn-lg float-right" onClick={props.onClick}>Continue</button>
            </div>
            :
            null
        }
        </>
    );
};

export default NextQuestionButton;