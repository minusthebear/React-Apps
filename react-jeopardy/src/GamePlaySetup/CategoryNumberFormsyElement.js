import React, { useState } from 'react';
import BasicTextField from "../common/BasicTextField";
import Formsy, {addValidationRule} from "formsy-react";

const CategoryNumberFormsyElement = ({ showNextGroup, showNext }) => {

    let [ categories, setCategories ] = useState(0);
    let [ numPlayers, setNumPlayers ] = useState(0);
    let [ invalidValues, setInvalidValues ] = useState(true);

    addValidationRule('minAndMaxValue', (values) => {
        let a = values['categories'],
            b = values['numPlayers'];

        if (checkIfAllAreTrue(parseInt(a), parseInt(b))) {
            setInvalidValues(false);

            return;
        }
        setInvalidValues(true);
    });

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
        return (cat >= 1 && cat <= 6 && num >= 1 && num <= 4);
    };

    const categoryChange = e => {
        setCategories(e.target.value);
    };

    const playersChange = e => {
        setNumPlayers(e.target.value);
    };

    return (
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

            <button disabled={invalidValues && !showNextGroup} >NEXT ONE</button>
        </Formsy>
    );
};

export default CategoryNumberFormsyElement;