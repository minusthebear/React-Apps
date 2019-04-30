import React from 'react';
import './App.scss';
import './bootstrap.min.css';
import TotalScore from "./common/TotalScore";
import IndividualScore from "./common/IndividualScore";

const Scoreboard = ({totalPoints, player, showMainGrid}) => {
    return (
        <div className="d-flex justify-content-around">
            { showMainGrid
                ? (<TotalScore totalPoints={totalPoints} />)
                : (<IndividualScore totalPoints={totalPoints} player={player} />)
            }
        </div>
    );
};

export default Scoreboard;