import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
// import { setTranslateId } from '../actions/index';
import { getCityAPI } from '../api/translateApi';

const App = (props) => {

    let [ invalidLocation, setInvalidLocation ] = useState(false);
    let [ coords, setCoords ] = useState(null);

    useEffect(() => {

    }, []);

    const makeApiCall = (city, cCode) => {
        console.log(getCityAPI(city, cCode));
            // .then((res) => {
            //     console.log(res);
            //     res.cod === 200 ? successFunc(res) : failFunc();
            // });
    };

    const successFunc = (res) => {
        setCoords(res);
        setInvalidLocation(false);
    };

    const failFunc = () => {
        setCoords(null);
        setInvalidLocation(true);
    };

    const submitForm = () => {
        if (coords) {
            const obj = {
                city: coords.name,
                country: sys.country,
                lat: coord.lat,
                lon: coord.lon
            }
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form
                    makeApiCall={makeApiCall}
                    submitForm={submitForm}
                    invalidLocation={invalidLocation}
                />
            </div>
        </div>
    );
};

// ownProps is second param built in to React-Redux
const mapStateToProps = (state, ownProps) => ({
    // translateId: state.translationReducer.translateId
});

const mapDispatchToProps = {
    // setTranslateId
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
