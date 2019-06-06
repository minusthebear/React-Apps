import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
// import { setTranslateId } from '../actions/index';
import { getCityAPI } from '../api/translateApi';

const App = (props) => {

    let [ invalidLocation, setInvalidLocation ] = useState(false);

    useEffect(() => {

    }, []);

    const makeApiCall = (city, cCode) => {
        getCityAPI(city, cCode)
            .then((res) => {
                res.cod === 200 ? setInvalidLocation(false) : setInvalidLocation(true);
            }).catch((err) => {
                throw new Error(err);
            });
    };

    const submitForm = () => {

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
