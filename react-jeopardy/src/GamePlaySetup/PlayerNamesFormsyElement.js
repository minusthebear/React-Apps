import React, { useState, useEffect } from 'react';
import Formsy from "formsy-react";
import {BasicButton} from "../common/BasicButton";

const PlayersNamesFormsyElement = ({ playerCount, sendNames }) => {

    const playerSetup = () => {
        let arr = [];
        for (let i = 0; i < playerCount; i++) {
            arr[i] = '';
        }
        return arr;
    };

    function setNameByIndex(idx, newName) {
        return players.map((s, _idx) => {
           if (_idx !== idx) return s;
           return newName;
        });
    }

    let [ players, setPlayers ] = useState(playerSetup());
    let [ invalidStrings, setInvalidStrings ] = useState(true);
    let [ doneUpdating, setDoneUpdating ] = useState(false);

    const finalFunc = (e) => {
        setDoneUpdating(true);
        sendNames(players);
    };
    const invokeNameChange = (e, idx) => {
        let temp = setNameByIndex(idx, e);
        setPlayers(temp);
        changeInvalidStrings(temp);
    };

    const changeInvalidStrings = (players) => {
        let temp = players.slice(0),
            anyInvalidStrings = !(temp.every((val) => val && val.length ));

        if (anyInvalidStrings !== invalidStrings) {
            setInvalidStrings(anyInvalidStrings);
        }
    };

    return (
        <Formsy onSubmit={finalFunc}>
            {players.map((val, idx) => {
                    return (<div name={'Player' + (idx + 1)} key={idx}>
                        <input name={'Player' + (idx + 1)} type="text" value={val}
                               onChange={(e) => invokeNameChange(e.target.value, idx)}/>
                    </div>)
                }
            )}
            <BasicButton isDisabled={invalidStrings || doneUpdating }/>
        </Formsy>
    );
};

export default PlayersNamesFormsyElement;