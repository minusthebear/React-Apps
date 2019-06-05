import React, { useState } from 'react';
import Formsy from 'formsy-react'
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions';
import List from "./List";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

// change to function component later
function ConnectedForm (props) {
    const { submitForm } = props;

    let [ city, setCity ] = useState('');
    let [ countryCode, setCountryCode ] = useState(null);

    function handleChange(e) {
        setCity(e.target.value);
    }

    function handleSubmit() {
        if (city.length) {
            submitForm(city, countryCode);
            setCity('');
            setCountryCode(null);
        }
    }

    const selectCountryCode = (val) => {
        setCountryCode(val);
    };

    return (
        <Formsy onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="City">City</label>
                <input
                    type="textarea"
                    className="form-control"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="Country">Country</label>
                <List selectCountryCode={selectCountryCode} />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
                SAVE
            </button>
        </Formsy>
    );
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;