import React, { useState, useEffect } from 'react';
import '../index.scss';
import CategoryNumberFormsyElement from './CategoryNumberFormsyElement';
import PlayersNamesFormsyElement from "./PlayerNamesFormsyElement";


function SetGamePlayValues({ setValues }) {

    let [ gameValues, setGameValues ] = useState({});
    let [ showNextGroup, setShowNextGroup ] = useState(false);
    let [ playerCount, setPlayerCount ] = useState(0);
    let [ readyForTakeoff, setReadyForTakeoff ] = useState(false);

    const showNext = (settings) => {
        setGameValues({ ...gameValues, settings});
        setPlayerCount(parseInt(settings.numPlayers));
        setShowNextGroup(true);
    };

    const sendNames = (players) => {
        setGameValues({...gameValues, players});
        setReadyForTakeoff(true);
    };

    useEffect(() => {
       if (readyForTakeoff) {
           setValues(gameValues);
       }
    });

    return (
        <div className="container-fluid">
            <CategoryNumberFormsyElement
                showNextGroup={showNextGroup}
                showNext={showNext}
            />

            { showNextGroup
                ?
                (<PlayersNamesFormsyElement
                    playerCount={playerCount}
                    sendNames={sendNames}
                />)
                :
                <></>
            }
        </div>


    );
}

export default SetGamePlayValues;