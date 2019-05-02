import React, { useState } from 'react';
import './index.css';
import Formsy, {addValidationRule} from 'formsy-react';
import BasicTextField from "./common/BasicTextField";
import { BasicButton } from "./common/BasicButton";


function SetGamePlayValues({ setValues }) {

    addValidationRule('minAndMaxValue', (values) => {

        let a = values['categories'],
            b = values['numPlayers'];

        checkIfAllAreTrue(parseInt(a), parseInt(b))
            ? setInvalidValues(false)
            : setInvalidValues(true);
    });

    let [ gameValues, setGameValues ] = useState({});
    let [ invalidValues, setInvalidValues ] = useState(true);
    let [ numPlayers, setNumPlayers ] = useState(0);
    let [ categories, setCategories ] = useState(0);
    let [ players, setPlayers ] = useState([]);
    let [ showNextGroup, setShowNextGroup ] = useState(false);
    let [ invalidStrings, setInvalidStrings ] = useState(true);

    const categoryChange = e => {
        setCategories(parseInt(e.target.value));
    };

    const playersChange = e => {
        setNumPlayers(parseInt(e.target.value));
    };

    const checkIfAllAreTrue = (cat, num) => {
        return (cat >= 1 && cat <= 6 && num >= 1 && num <= 4);
    };

    const showNextButton = () => {
        return !showNextGroup ? <button disabled={invalidValues} >NEXT ONE</button> : null;
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

            {showNextGroup
                ?
                (<Formsy onSubmit={{}}>
                    {players.map((val, idx) =>
                        <BasicTextField name={'Player ' + (idx + 1)} key={'Player ' + (idx + 1)} idx={idx} value={val} field={'Player ' + (idx + 1)} idx={idx} multiFields={true} onChange={invokeNameChange}/>
                    )}
                </Formsy>)
                :
                <></>
            }
        </div>


    );
}

export default SetGamePlayValues;