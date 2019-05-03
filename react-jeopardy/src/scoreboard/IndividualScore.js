import React from 'react';
import '../index.scss';
import '../MainGrid.scss';
import '../bootstrap.min.css';

const IndividualScore = ({totalPoints, player}) => {
    return (
        <div class="individual-score-container">
            <div>
                <div>
                    <div>{totalPoints[player].name}</div>
                </div>
                <div>
                    <div>{totalPoints[player].score}</div>
                </div>
            </div>
        </div>
    );
};

export default IndividualScore;