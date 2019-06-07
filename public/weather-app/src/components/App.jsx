import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
// import { setTranslateId } from '../actions/index';
import { getCityAPI, testBackEnd } from '../api/translateApi';

const App = (props) => {

    let [ invalidLocation, setInvalidLocation ] = useState(false);
    let [ coords, setCoords ] = useState(null);

    useEffect(() => {

    }, []);

    const makeApiCall = (city, cCode) => {
        getCityAPI(city, cCode)
            .then((res) => {
                successFunc(res.data);
            })
            .catch(failFunc);
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
                country: coords.sys.country,
                lat: coords.coord.lat,
                lon: coords.coord.lon
            };

            testBackEnd(obj)
                .then((res) => {
                   console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });

            console.log('Outside of testBackEnd');
            setCoords(null);
            setInvalidLocation(false);
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
