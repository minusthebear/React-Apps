import React, { useState, useEffect } from 'react';
import Formsy from 'formsy-react'
import { connect } from 'react-redux';
import { DebounceInput } from "react-debounce-input";
import uuidv1 from 'uuid';
import { addArticle } from '../actions';
import List from "./List";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

// change to function component later
function Form (props) {
    const { submitForm, makeApiCall, invalidLocation } = props;

    let [ city, setCity ] = useState('');
    let [ countryCode, setCountryCode ] = useState(null);


    function handleChange(e)  {
        let val = e.target.value;

        setCity(val);

        if (val.length) {
            makeApiCall(val, countryCode);
        }
    }

    function handleSubmit() {
        if (city.length) {
            submitForm(city, countryCode);
            setCity('');
            setCountryCode(null);
        }
    }

    function selectCountryCode(val) {
        setCountryCode(val);

        if (city.length) {
            makeApiCall(city, val);
        }
    }

    return (
        <Formsy onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="City">City</label>
                <DebounceInput
                    type="textarea"
                    debounceTimeout={1000}
                    className="form-control"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="Country">Country</label>
                <List
                    selectCountryCode={selectCountryCode}
                    countryCode={countryCode}
                    value={countryCode}
                />
            </div>
            <button disabled={invalidLocation} type="submit" className="btn btn-success btn-lg">
                SAVE
            </button>
        </Formsy>
    );
}

const ConnectedForm = connect(
    null,
    mapDispatchToProps
)(Form);

export default ConnectedForm;
