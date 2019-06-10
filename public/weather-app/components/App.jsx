import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { createLocationObj } from '../helpers/createObjects';
import {getCityAPI, addNewLocation, getAllLocations, deleteLocation} from '../api/weatherApi';
import Locations from './Locations';
import CityView from './CityView';
import Header from './Header';
import bgImage from '../images/4b8d49460051b86921dce5c522c1107e.jpg';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {

    let [ invalidLocation, setInvalidLocation ] = useState(false);
    let [ coords, setCoords ] = useState(null);
    let [ allLocations, setAllLocations ] = useState(null);
    let [ city, setCity ] = useState(null);
    let [ mainPage, setMainPage ] = useState(true);

    useEffect(() => {
    	async function triggerDisplayLocations() {
    		await displayLocations();
		}
		let ret = triggerDisplayLocations();
    	console.log(ret);
		console.log('hit!!!');
    }, []);

    const makeApiCall = (city, cCode) => {
        getCityAPI(city, cCode)
            .then((res) => {
                successFunc(res);
            })
            .catch(failFunc);
    };

    const successFunc = (res) => {
    	console.log(res);
        setCoords(res);
        setInvalidLocation(false);
    };

    const failFunc = () => {
        setCoords(null);
        setInvalidLocation(true);
    };

    const submitForm = () => {
    	console.log(coords);
        if (coords) {
            const obj = createLocationObj(coords);

			addNewLocation(obj)
                .then((res) => {
                   console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
				.finally(displayLocations);
            setCoords(null);
            setInvalidLocation(false);
        }
    };

	const displayLocations = async () => {
		let locations = await getAllLocations();
		setAllLocations(locations);
		setCurPage(null);
	};

	const selectCity = (loc) => {
		setCity(loc);
	};

	const deleteCity = async (id) => {
		let ret1 = await deleteLocation(id);
		let ret2 = await displayLocations();
	}

	const getLocationsElement = () => {
		return (
			<>
				<h2>All Locations</h2>
				<Locations
					allLocations={allLocations}
					selectCity={selectCity}
					deleteCity={deleteCity}
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

	const showAddNewLocationElement = () => {
		return (
			<div className="col-md-10 offset-md-1">
				<h2>Add a new location</h2>
				<Form
					makeApiCall={makeApiCall}
					submitForm={submitForm}
					invalidLocation={invalidLocation}
				/>
			</div>
		);
	};

	const showLocation = () => {
		return (

			<div className="col-md-10 offset-md-1">
				{ city ? getCityViewElement() : getLocationsElement() }
			</div>
		);
	}

    return (
    	<div style={{backgroundImage: `url(${bgImage})`}} className="weather-app-container" >
			<div className="container">
				<Header locations={displayLocations}/>
				<div className="row">
					{ mainPage ? showLocation() : showAddNewLocationElement() }
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
