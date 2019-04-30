import React from 'react';
import './App.scss';
import './bootstrap.min.css';

const TotalScore = ({totalPoints}) => {
    return (Object.keys(totalPoints).map((key, index) =>
        <div><div key={key} >Player: {key}</div><div key={index} >Score: {totalPoints[key]}</div><br/></div>
    ));
};

export default TotalScore;