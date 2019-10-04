import Formsy from "formsy-react";
import BasicTextField from "../common/BasicTextField";
import React, {useState, useEffect} from "react";
import Select from "react-select";
import {getEntriesNames, setValueAndLabel} from './NewFieldService'


const NewField = ({allQuestionData}) => {

    // TODO: change later
    let [keys, setKeys] = useState([]);
    let [cats, setCats] = useState([]);
    let [catFlag, setCatFlag] = useState(false);
    let [values, setValues] = useState(null);
    let [valueFlag, setValueFlag] = useState(false);

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
            console.log(setValueAndLabel(arrEntries[0]));
            setValues(setValueAndLabel(arrEntries[0]));
            setValueFlag(true);
        } else {
            console.log(arrEntries.map((k) => setValueAndLabel(k)));
            setCats(arrEntries.map((k) => setValueAndLabel(k)))
            setCatFlag(true);
        }


    };

    return (
        <Formsy data-testid="formsy" className="category-number-form" onSubmit={() => {
        }}> <div data-testid="keys" style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
                    <Select options={keys} onChange={selectValues}/>
            </div>
            { catFlag ?
                <div data-testid="categories" style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
                    <Select options={cats} onChange={() => {}}/>
                </div>
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