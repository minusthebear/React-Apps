import React from 'react';
import './App.css';
import './bootstrap.min.css';

const QuestionBooks = ({totalPoints, player, showMainGrid}) => {

    return (
        <div className="col-md-10 col-offset-1">
            <h2>
                { showMainGrid ? JSON.stringify(totalPoints) : totalPoints[player] }
            </h2>
        </div>
    );
};

export default QuestionBooks;