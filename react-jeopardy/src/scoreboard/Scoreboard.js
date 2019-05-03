import React from 'react';
import '../MainGrid.scss';
import '../bootstrap.min.css';
import TotalScore from "./TotalScore";
import IndividualScore from "./IndividualScore";

const Scoreboard = ({totalPoints, player, showMainGrid}) => {
    return (
        <>
        { showMainGrid
            ?
                (<div className="flex-table row scoreboard-container">
                    <TotalScore totalPoints={totalPoints} player={player} />
                </div>)
                :
                (<div className="scoreboard-container">
                    <IndividualScore totalPoints={totalPoints} player={player} />
                </div>)
                }
        </>
    );
};

export default Scoreboard;