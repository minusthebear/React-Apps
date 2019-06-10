import React, { useState, useEffect } from 'react';
import { createWeatherObj } from '../helpers/createObjects';
import {
	getCityAPI,
	saveCurrentWeather,
	allWeatherLogsByLocation,
	getWeatherLog,
	deleteWeatherLog
} from '../api/weatherApi';
import { countryCodeConverter } from '../helpers/countryCode';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';
import WeatherLogDetails from './WeatherLogDetails';
import './CityView.scss';

const CityView = ({ loc, back }) => {

	let [ weather, setWeather ] = useState(null);
	let [ weatherLogs, setWeatherLogs] = useState(null);
	let [ weatherFlag, setWeatherFlag ] = useState(false);

	useEffect(() => {
		async function execGetLocationWeather() {
			await getLocationWeather();
		}
		let ret = execGetLocationWeather();
	}, []);

	const getLocationWeather = async () => {
		const wt = await getCityAPI(loc.city, loc.country);
		const retWt = createWeatherObj(wt);
		setWeather(retWt);
		let ret = await saveCurrentWeather(retWt);
		setWeatherFlag(false);
	};

	const getWeatherDetails = () => {
		if (weather && weather.name) {
			return <WeatherDetails weather={weather} />
		}
		return null;
	};

	const displayAllLoggedWeather = async () => {
		const res = await allWeatherLogsByLocation(loc.id);
		setWeatherLogs(res);
		setWeatherFlag(true);
	};

	const getWeatherLogDetail = async (_id) => {
		const res = await getWeatherLog(_id);
		console.log(res);
		// setWeatherLogs(null);
		// setWeatherFlag(false);
	}

	const getLogDetails = () => {
		if (Array.isArray(weatherLogs) && weatherLogs.length) {
			return <WeatherLogDetails weatherLogs={weatherLogs} onClick={getWeatherLogDetail} deleteLog={deleteLog} />;
		}
	};

	const deleteLog = async (_id) => {
		let ret1 = await deleteWeatherLog(_id);
		let ret2 = await displayAllLoggedWeather();
	};

	return (
		<div className="city-view-container">
			<div className="city-view-header-container">
				<h2>{ loc.city }</h2>
				<h3>{countryCodeConverter(loc.country)}</h3>
				<h5>Latitude: {loc.lat}</h5>
				<h5>Longitude: {loc.lon}</h5>
			</div>
			<div>
				<button className="btn btn-lg btn-info" onClick={getLocationWeather}>Get today's weather</button>
				<button className="btn btn-lg btn-warning" onClick={displayAllLoggedWeather}>Get all logged weather events</button>
				<button className="btn btn-lg btn-primary" onClick={back} >Back</button>
			</div>
			<div>
				{ weatherFlag ? getLogDetails() : getWeatherDetails() }
			</div>
		</div>
	)
};

export default connect()(CityView);
