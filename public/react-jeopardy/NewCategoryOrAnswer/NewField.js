import Formsy from "formsy-react";
import BasicTextField from "../common/BasicTextField";
import React, {useState, useEffect} from "react";
import Select from "react-select";


const NewField = ({allQuestionData}) => {

    // TODO: change later
    let [keys, setKeys] = useState([]);
    let [cats, setCats] = useState([]);
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

        const firstVal = Object.entries(allQuestionData[key][0]);

        console.log(firstVal);

        const arrEntries = [];

        firstVal.forEach((v) => {
           if (Array.isArray(v[1])) {
               arrEntries.push(v[0]);
           }
        });

        console.log(allQuestionData[key]);

        if (!arrEntries.length) {
            return;
        } else if (arrEntries.length === 1) {
            // allQuestionData[key];
        }


    };

    return (
        <Formsy data-testid="formsy" className="category-number-form" onSubmit={() => {
        }}>
            <div data-testid="keys" style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
                    <Select options={keys} onChange={selectValues}/>
            </div>
            { cats.length ?
                <div data-testid="categories" style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
                    <Select options={cats} onChange={() => {}}/>
                </div>
                : null
            }
            { values.length ?
                <div data-testid="values" style={{width: '200px', textAlign:'center', margin: '0 auto'}}>
                    <Select options={values} onChange={() => {}}/>
                </div>
                : null
            }
        </Formsy>
    );
};

export default NewField;