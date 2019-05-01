import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';

const TotalScore = ({totalPoints, player}) => {

    const isSelectedPlayer = (key) => {
        return Math.floor(key) === player ? { 'background-color': '#00ff00'} : null;
    };

    const handleNegativeValues = (key) => {
        return Math.floor(totalPoints[key]) < 0 ? (
            <div>-${Math.abs(totalPoints[key])}</div>
        ) : (
            <div>${totalPoints[key]}</div>
        );
    };

    return (Object.keys(totalPoints).map((key) =>
        <div key={key} className="total-score-container" style={ isSelectedPlayer(key) }>
            <div className="total-score-container-name" >
                <div>
                    {key}
                </div>
            </div>
            <div className="total-score-container-points">
                { handleNegativeValues(key)}
            </div>
        </div>
    ));
};

export default TotalScore;