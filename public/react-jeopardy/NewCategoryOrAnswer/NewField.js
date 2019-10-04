import Formsy from "formsy-react";
import BasicTextField from "../common/BasicTextField";
import React, {useEffect} from "react";
import Select from "react-select";
import {getEntriesNames, setValueAndLabel} from './NewFieldService'
import NewFieldSelectMenu from "./NewFieldSelectMenu";


const NewField = ({allQuestionData}) => {

    // TODO: change later
    let [keys, setKeys] = React.useState([]);
    let [cats, setCats] = React.useState([]);
    let [catFlag, setCatFlag] = React.useState(false);
    let [values, setValues] = React.useState(null);
    let [valueFlag, setValueFlag] = React.useState(false);

    useEffect(() => {
        let arr = Object.keys(allQuestionData);

        setKeys(arr.map((k) => {
            return setValueAndLabel(k);
        }));

    }, [allQuestionData]);

    const selectValues = (val) => {
        const key = val.value;
        if (!allQuestionData[key]) {
            return;
        }

        const arrEntries = getEntriesNames(allQuestionData, key);

        if (!arrEntries.length) {
            return;
        } else if (arrEntries.length === 1) {
            setValues(setValueAndLabel(arrEntries[0]));
            setValueFlag(true);
        } else {
            // console.log(arrEntries.map((k) => setValueAndLabel(k)));
            setCats(arrEntries.map((k) => setValueAndLabel(k)));
            setCatFlag(true);
        }


    };

    return (
        <Formsy data-testid="formsy" className="category-number-form" onSubmit={() => {
        }}> <NewFieldSelectMenu testId={'keys'} options={keys} onChange={selectValues}/>
            { catFlag ?
                <NewFieldSelectMenu testId={'categories'} options={cats} onChange={() => {}}/>
                : null
            }
            { valueFlag ?
                <div data-testid="values" style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
                    <BasicTextField
                        name="valueName"
                        value={''}
                        field={values.label}
                        onKeyDown={() => {}}
                        onChange={() => {}}
                        disabled={false}
                    />
                </div>
                : null
            }
        </Formsy>
    );
};

export default NewField;