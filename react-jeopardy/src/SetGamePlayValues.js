import React, { useState } from 'react';
import './index.css';
import utils from './utils';
import {BasicTextField} from "./common/BasicTextField";
import { BasicButton } from "./common/BasicButton";

function SetGamePlayValues({ setValues }) {

    let [ gameValues, setGameValues ] = useState({});
    let [ invalidValues, setInvalidValues ] = useState(true);
    let [ numPlayers, setNumPlayers ] = useState(0);
    let [ categories, setCategories ] = useState(0);
    let [ players, setPlayers ] = useState([]);
    let [ showNextGroup, setShowNextGroup ] = useState(false);
    let [ invalidStrings, setInvalidStrings ] = useState(true);

    const categoryChange = e => {
        let val = Math.floor(e.target.value);
        setCategories(val);
        checkIfAllAreTrue(val, numPlayers);
    };

    const playersChange = e => {
        let val = Math.floor(e.target.value);
        setNumPlayers(val);
        checkIfAllAreTrue(categories, val);
    };

    const invokeNameChange = (idx, e) => {
        playerNameChange(idx, e);
        changeInvalidStrings(e);
    };

    const playerNameChange = (idx, e) => {
        let temp = players;
        temp[idx] = e.target.value;
        setPlayers(temp);
    };

    const changeInvalidStrings = (e) => {
        let temp = players.slice(0);
        let anyInvalidStrings = !(temp.every((val) => val && val.length ));
        setInvalidStrings(anyInvalidStrings);
    };

    const sendToParent = () => {

    };

    const showNext = e => {
        e.preventDefault();
        let obj = [];

        for (let i = 0; i < numPlayers; i++) {
            obj[i] = null
        }
        setPlayers(obj);
        setShowNextGroup(true);
    };

    const handleKeyPress = (e) => {
        if (e.keyCode !== 8
            && e.keyCode !== 9
            && e.keyCode !== 37
            && e.keyCode !== 39
            && !(e.keyCode >= 48 && e.keyCode <= 57)
        ) {
            e.preventDefault();
        }
    };

    const checkIfAllAreTrue = (cat, num) => {
        if (cat >= 1 && cat <= 6 && num >= 1 && num <= 4) {
            setInvalidValues(false);
        } else {
            setInvalidValues(true);
        }
    };

    return (
        <form>
            <div className="AddAuthorForm__input">
                <label htmlFor="categories">How many categories? (No more than six)</label>
                <input type="text" name="categories" value={categories} onKeyDown={handleKeyPress} onChange={categoryChange} disabled={showNextGroup} />
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="numPlayers">How many players? (No more than four)</label>
                <input type="text" name="numPlayers" value={numPlayers} onKeyDown={handleKeyPress} onChange={playersChange} disabled={showNextGroup} />
            </div>
            {showNextGroup
                ? (<>
                    <div className="AddAuthorForm__input">
                        {players.map((val, idx) =>
                            <BasicTextField key={idx} val={val} idx={idx} valueChange={invokeNameChange}/>
                        )}
                    </div>
                </>)
                : <></>
            }
            {showNextGroup
                ? <BasicButton  onClick={sendToParent} />
                : <button onClick={showNext} disabled={invalidValues} >NEXT ONE</button>
            }
        </form>
    );
}

export default SetGamePlayValues;