import React, { useState, useEffect } from 'react';
import Formsy from 'formsy-react'
import { connect } from 'react-redux';
import { DebounceInput } from "react-debounce-input";
import { createLocationObj } from '../helpers/createObjects';
import { addArticle } from '../../redux/actions/weatherActions';
import List from "./List";
import './Form.scss';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

// change to function component later
function Form (props) {
    const { submitForm, makeApiCall, invalidLocation, coords } = props;

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

    function showInitialResults() {

        if (coords && coords.name.length) {

            const loc = createLocationObj(coords);
            return (
                <div className="add-new-location-container">
                    <h4>Search results</h4>
                    <table>
                        <tbody>
                        <tr>
                            <td>City:</td>
                            <td>{loc.city}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{loc.country}</td>
                        </tr>
                        <tr>
                            <td>Latitude:</td>
                            <td>{loc.lat}</td>
                        </tr>
                        <tr>
                            <td>Longitude:</td>
                            <td>{loc.lon}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }

    function invalidLocationFunc() {
        return (
            <div className="add-new-location-container">
                <h4>No search results found.</h4>
            </div>
        )
    }


    return (
        <>
            <div className="add-new-location-container">
                <Formsy onSubmit={handleSubmit}>
                    <div className="form-group form-city-input">
                        <label htmlFor="City">City</label>
                        <DebounceInput
                            type="input"
                            className="form-input-element"
                            debounceTimeout={1000}
                            value={city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group form-city-select">
                        <label htmlFor="Country">Country</label>
                        <List
                            selectCountryCode={selectCountryCode}
                            countryCode={countryCode}
                            value={countryCode}
                        />
                    </div>
                    <div>
                        <button disabled={invalidLocation} type="submit" className="btn btn-success btn-lg">
                            SAVE
                        </button>
                    </div>
                </Formsy>
            </div>
            {showInitialResults()}
            {invalidLocation ? invalidLocationFunc() : null}
        </>
    );
}

const ConnectedForm = connect(
    null,
    mapDispatchToProps
)(Form);

export default ConnectedForm;
