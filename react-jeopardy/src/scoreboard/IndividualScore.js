import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';

const IndividualScore = ({totalPoints, player}) => {
    return (
        <div>
            <div>Player: {totalPoints[player].name}</div>
            <div>Score: {totalPoints[player].score}</div>
        </div>
    );
};

export default IndividualScore;