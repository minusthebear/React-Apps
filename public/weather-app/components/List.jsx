import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import countries from '../constants/allCountryCodes';
import { find } from 'lodash'

const mapStateToProps = state => {
    return {  };
};

const ConnectedList = ({ selectCountryCode, countryCode }) => {

    let [ selectValue, setSelectValue ] = useState('SELECT');

    const countrySelect = (e) => {
        const val = find(countries, (country) => {
            if (e.target.value === country.code) {
                return country;
            }
        });
        val.code && val.name ? execCountrySelect(val.code, val.code) : execCountrySelect(e.target.value, null);
    };

    useEffect(() => {
        if (countryCode === null && selectValue !== 'SELECT') {
            setSelectValue('SELECT');
        }
    }, [countryCode]);

    const execCountrySelect = (selVal, codeVal) => {
        setSelectValue(selVal);
        selectCountryCode(codeVal);
    };

    return (
        <select className="" onChange={countrySelect} value={selectValue}>
            <option value="SELECT">
                SELECT
            </option>
            {countries.map(country => (
                <option className="list-group-item" key={country.code} name={country.name} value={country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
