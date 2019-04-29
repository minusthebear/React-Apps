import React, { useState } from 'react';
import './index.css';
import utils from './utils';

function SetGamePlayValues({ setValues }) {

    let [ gameValues, setGameValues ] = useState({});
    let [ invalidValues, setInvalidValues ] = useState(false);
    let [ numPlayers, setNumPlayers ] = useState(0);
    let    categories = 0,
        players = [];

    const categoryChange = (event) => {
        if (event.target.value > 6 || event.target.value < 1) {
            setInvalidValues(true);
        }
    };

    const playersChange = e => {
        if (e.target.value > 4 || e.target.value < 1) {
            setInvalidValues(true);
        } else {
            setNumPlayers(e.target.value);
        }
    };

    const playerNameChange = e => {
        console.log(e.type);
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

    return (
        <form>
            <div className="AddAuthorForm__input">
                <label htmlFor="categories">How many categories? (No more than six)</label>
                <input type="text" name="categories" value={categories} onChange={categoryChange} />
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="numPlayers">How many players? (No more than four)</label>
                <input type="text" name="numPlayers" value={numPlayers} onKeyDown={handleKeyPress} onChange={playersChange} />
            </div>
            <div className="AddAuthorForm__input">
                {utils.range(1, numPlayers).map((val, idx) =>
                    <input key={idx} type="text" name="bookTemp" value={players[idx]} onChange={playerNameChange} />
                )}
                {/*{players.map((name) => <p key={name}>{name} </p>)}*/}
                {/*<label htmlFor="playersNames"></label>*/}
                {/*<input type="text" name="bookTemp" value={this.state.bookTemp} onChange={onFieldChange} />*/}
                {/*<input type="button" value="+" onClick={this.handleAddBook} />*/}
            </div>
            <input type="submit" value="ADD" disabled={invalidValues}/>
        </form>
    );
}

export default SetGamePlayValues;