import Formsy from "formsy-react";
import BasicTextField from "../common/BasicTextField";
import React, {useState, useEffect} from "react";
import Select from "react-select";


const NewField = ({allQuestionData}) => {

    // TODO: change later
    let [keys, setKeys] = useState([]);
    let [values, setValues] = useState([]);

    useEffect(() => {
        let arr = Object.keys(allQuestionData);

        setKeys(arr.map((k,v) => {
            let val = k.replace(/([A-Z])/g, ' $1').trim().replace(/^.{1}/g, k[0].toUpperCase());
            return {value: k, label: val };
        }));

    }, [allQuestionData]);

    const selectValues = (val) => {
        const key = val.value;
        if (!allQuestionData[key]) {
            return;
        }

        console.log(allQuestionData[key]);
    };

    return (
        <Formsy className="category-number-form" onSubmit={() => {
        }}>
            <div style={{width: '200px', display:'inline-block'}}>
                <Select options={keys} onChange={selectValues}/>
            </div>
        </Formsy>
    );
};

export default NewField;