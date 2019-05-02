import React, { useState } from 'react';
import './index.css';
import Formsy, {addValidationRule} from 'formsy-react';
import utils from './utils';
import BasicTextField from "./common/BasicTextField";
import { BasicButton } from "./common/BasicButton";


function SetGamePlayValues({ setValues }) {
    addValidationRule('minAndMaxValue', (values, value) => {
        let a = values['categories'],
            b = values['numPlayers'];

        if (checkIfAllAreTrue(parseInt(a), parseInt(b))) {
            setInvalidValues(false);

            return;
        }
        setInvalidValues(true);
    });

    let [ gameValues, setGameValues ] = useState({});
    let [ invalidValues, setInvalidValues ] = useState(true);
    let [ numPlayers, setNumPlayers ] = useState(0);
    let [ categories, setCategories ] = useState(0);
    let [ players, setPlayers ] = useState([]);
    let [ showNextGroup, setShowNextGroup ] = useState(false);
    let [ invalidStrings, setInvalidStrings ] = useState(true);

    const categoryChange = e => {
        setCategories(e.target.value);
    };

    const playersChange = e => {
        setNumPlayers(e.target.value);
    };

    const checkIfAllAreTrue = (cat, num) => {
        return (cat >= 1 && cat <= 6 && num >= 1 && num <= 4);
    };

    const showNextButton = () => {
        return !showNextGroup ? <button disabled={invalidValues} >NEXT ONE</button> : null;
    };

    const invokeNameChange = (e, idx) => {
        console.log(e.target);
        console.log(idx);
        playerNameChange(idx, e);
        changeInvalidStrings(e);
    };

    const playerNameChange = (idx, e) => {
        let temp = players;
        // console.log(e);
        // temp[idx] = e.target.value;
        // console.log(temp);
    };

    const changeInvalidStrings = (e) => {
        let temp = players.slice(0);
        let anyInvalidStrings = !(temp.every((val) => val && val.length ));
        setInvalidStrings(anyInvalidStrings);
    };

    const func = (idx) => {
        return (<BasicTextField
            name={'Player ' + (idx + 1)}
            key={'Player ' + (idx + 1)}
            idx={idx}
            value={players[idx]}
            field={'Player' + (idx + 1)}
            multiFields={true}
            onChange={invokeNameChange}
        />);
    }

    const sendToParent = () => {

    };

    const showNext = (a,b,c,d,e) => {
        let obj = [];
        console.log('players');
        console.log(players);

        console.log(numPlayers);

        for (let i = 0; i < numPlayers; i++) {
            obj[i] = '';
            console.log(obj);
        }
        console.log('showNext');
        console.log(obj);
        setPlayers(['dave', 'steve', 'mark', 'jenna']);
        console.log(players);
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

    return (
        <div>
            <Formsy onSubmit={showNext}>
                <BasicTextField
                    name="categories"
                    isInt={true}
                    className=""
                    field="categories"
                    value={categories}
                    validations="minAndMaxValue"
                    onKeyDown={handleKeyPress}
                    onChange={categoryChange}
                    disabled={showNextGroup}
                />

                <BasicTextField
                    name="numPlayers"
                    isInt={true}
                    className=""
                    field="numPlayers"
                    value={numPlayers}
                    validations="minAndMaxValue"
                    onKeyDown={handleKeyPress}
                    onChange={playersChange}
                    disabled={showNextGroup}
                />

                { showNextButton() }
            </Formsy>

            { showNextGroup
                ?
                (<Formsy onSubmit={{}}>
                    {players.map((val, idx) => {
                        console.log(val);
                        return func(idx);
                    })}
                    <BasicButton onClick={sendToParent}/>
                </Formsy>)
                :
                <></>
            }
        </div>


    );
}

export default SetGamePlayValues;