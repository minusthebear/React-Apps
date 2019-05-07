import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';

const TotalScore = ({totalPoints, player}) => {

    const isSelectedPlayer = (key) => {
        return Math.floor(key) === player ? { 'backgroundColor': '#00ff00'} : { 'background': 'linear-gradient(90deg, rgba(10,4,111,1) 0%, rgba(6,12,233,1) 100%)'};
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