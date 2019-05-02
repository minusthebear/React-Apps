import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';

const TotalScore = ({totalPoints, player}) => {

    const isSelectedPlayer = (key) => {
        return Math.floor(key) === player ? { 'background-color': '#00ff00'} : null;
    };

    const handleNegativeValues = (num) => {
        return Math.floor(num) < 0 ? (
            <div>-${Math.abs(num)}</div>
        ) : (
            <div>${num}</div>
        );
    };

    return (Object.keys(totalPoints).map((key) =>
        <div key={key} className="total-score-container" style={ isSelectedPlayer(key) }>
            <div className="total-score-container-name" >
                <div>
                    {totalPoints[key].name}
                </div>
            </div>
            <div className="total-score-container-points">
                { handleNegativeValues(totalPoints[key].score)}
            </div>
        </div>
    ));
};

export default TotalScore;