import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import List from './List';
import Form from './Form';
// import { setTranslateId } from '../actions/index';
import { getTranslation, getAllCountryAPIs, getCityAPI } from '../api/translateApi';

const App = (props) => {


    useEffect(() => {
        console.log('useEffect');
        console.log(props);
        getAllCountryAPIs().then(res => {
           console.log(res);
        });
        // props.setTranslateId();
    }, []);

    const submitForm = (city, cCode) => {
        getCityAPI(city, cCode).then((res) => { console.log(res) });
    };

    return (
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new article</h2>
                <Form submitForm={submitForm}
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