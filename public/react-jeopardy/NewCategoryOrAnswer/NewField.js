import Formsy from "formsy-react";
import BasicTextField from "../common/BasicTextField";
import React, {useState} from "react";



const NewField = (props) => {

    console.log(props);

    // TODO: change later
    let [categories, setCategories] = useState('');
    let [numPlayers, setNumPlayers] = useState('');

    return (
        <Formsy className="category-number-form" onSubmit={() => {
        }}>
            <BasicTextField
                name="categories"
                isInt={false}
                className=""
                field="categories"
                value={categories}
                onKeyDown={() => {
                }}
                onChange={() => {
                }}
                disabled={false}
            />

            <BasicTextField
                name="numPlayers"
                isInt={false}
                className=""
                field="numPlayers"
                value={numPlayers}
                onKeyDown={() => {
                }}
                onChange={() => {
                }}
                disabled={false}
            />

        </Formsy>
    );
};

export default NewField;