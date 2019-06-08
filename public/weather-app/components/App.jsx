import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import {getCityAPI, addNewLocation, getAllLocations} from '../api/weatherApi';
import Locations from './Locations';
import CityView from './CityView';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

    let [ invalidLocation, setInvalidLocation ] = useState(false);
    let [ coords, setCoords ] = useState(null);
    let [ allLocations, setAllLocations ] = useState(null);
    let [ city, setCity ] = useState(null);

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

			addNewLocation(obj)
                .then((res) => {
                   console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            setCoords(null);
            setInvalidLocation(false);
        }
    };

	const displayLocations = async () => {
		let locations = await getAllLocations();
		setAllLocations(locations);
	};

	const selectCity = (loc) => {
		setCity(loc);
	};

	const getLocationsElement = () => {
		return (
			<>
				<h2>All Locations</h2>
				<Locations
					allLocations={allLocations}
					displayLocations={displayLocations}
					selectCity={selectCity}
				/>
			</>
		)
	};

	const getCityViewElement = () => {
		return (
			<CityView
				loc={city}
				back={showLocationsElement}
			/>);
	};

	const showLocationsElement = () => {
		setCity(null);
	};

    return (
    	<div className="container">
			<div className="row">
				<div className="col-md-5 offset-md-1">
					{ city ? getCityViewElement() : getLocationsElement() }
				</div>
				<div className="col-md-5 offset-md-1">
					<h2>Add a new location</h2>
					<Form
						makeApiCall={makeApiCall}
						submitForm={submitForm}
						invalidLocation={invalidLocation}
					/>
				</div>
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
