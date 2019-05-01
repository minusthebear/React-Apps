import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';
import TotalScore from "./TotalScore";
import IndividualScore from "./IndividualScore";

const Scoreboard = ({totalPoints, player, showMainGrid}) => {
    return (
        <div className="flex-table row scoreboard-container">
                { showMainGrid
                    ? (<TotalScore totalPoints={totalPoints} player={player} />)
                    : (<IndividualScore totalPoints={totalPoints} player={player} />)
                }
            </div>
    );
};

export default Scoreboard;