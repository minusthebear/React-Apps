import React from 'react';
import './App.css';
import './bootstrap.min.css';
import TotalScore from "./TotalScore";
import IndividualScore from "./IndividualScore";

const Scoreboard = ({totalPoints, player, showMainGrid}) => {
    return (
        <div className="col-md-10 col-offset-1">
            { showMainGrid ? (<TotalScore totalPoints={totalPoints} />) : (<IndividualScore totalPoints={totalPoints} player={player} />) }
        </div>
    );
};

export default Scoreboard;