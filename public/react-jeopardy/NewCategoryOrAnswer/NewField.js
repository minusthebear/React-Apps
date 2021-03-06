import Formsy from "formsy-react";
import BasicTextField from "../common/BasicTextField";
import React, {useEffect} from "react";
import {getEntriesNames, getPrimaryValues, setValueAndLabel} from './NewFieldService'
import NewFieldSelectMenu from "./NewFieldSelectMenu";

const NewField = ({allQuestionData, primaryCategory}) => {

    // TODO: change later
    let [key, setKey] = React.useState(null);
    let [keys, setKeys] = React.useState([]);
    let [subj, setSubj] = React.useState(null);
    let [subjFlag, setSubjFlag] = React.useState(false);
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
        let tempKey = val.value;
        setKey(tempKey);

        if (!allQuestionData[tempKey]) {
            return;
        }

        const primaryValues = getPrimaryValues(allQuestionData[tempKey], primaryCategory[tempKey]);
        setSubj(primaryValues);
        setSubjFlag(true);
    };

    const selectSubj = (val) => {
        console.log(val);
        const arrEntries = getEntriesNames(allQuestionData, key);

        if (arrEntries.length === 1) {
            console.log(setValueAndLabel(arrEntries[0]));
            setValues(setValueAndLabel(arrEntries[0]));
            setValueFlag(true);
        } else if (arrEntries.length > 1) {
            setCats(arrEntries.map((k) => setValueAndLabel(k)));
            setCatFlag(true);
        }
    };

    const selectCats = (val) => {
        console.log(allQuestionData[key]);
    };

    return (
        <Formsy data-testid="formsy" className="category-number-form" onSubmit={() => {}}>

            <NewFieldSelectMenu testId={'keys'} options={keys} onChange={selectValues}/>

            { subjFlag ?
                <NewFieldSelectMenu testId={'subject'} options={subj} onChange={selectSubj} />
                : null
            }

            { catFlag ?
                <NewFieldSelectMenu testId={'categories'} options={cats} onChange={selectCats}/>
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