import React from 'react';
import '../App.scss';
import '../bootstrap.min.css';

const IndividualScore = ({totalPoints, player}) => {
    return (
        <div>
            <div>Player: {player}</div>
            <div>Score: {totalPoints[player]}</div>
        </div>
    );
};

export default IndividualScore;