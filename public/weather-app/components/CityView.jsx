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
		setWeather(res);
		// setWeatherLogs(null);
		setWeatherFlag(false);
	}

	const getLogDetails = () => {
		if (Array.isArray(weatherLogs) && weatherLogs.length) {
			return (
				<div className="get-log-details">
					<WeatherLogDetails weatherLogs={weatherLogs} onClick={getWeatherLogDetail} deleteLog={deleteLog} />
				</div>
			);
		}
	};

	const deleteLog = async (_id) => {
		let ret1 = await deleteWeatherLog(_id);
		let ret2 = await displayAllLoggedWeather();
	};

	const getTodaysWeatherButton = () => {
		return <button className="btn btn-lg btn-info" onClick={getLocationWeather}>Get today's weather</button>;
	};

	const getAllLoggedWeatherEventsButton = () => {
		return <button className="btn btn-lg btn-warning" onClick={displayAllLoggedWeather}>Get all logged weather events</button>
	};

	return (
		<div className="city-view-container">
			<div className="city-view-header-container">
				<h2>{ loc.city }</h2>
				{ loc.country ? (<h3>, </h3>) : null}
				<h2>{countryCodeConverter(loc.country)}</h2>
				<h5>Latitude: {loc.lat}</h5>
				<h5>Longitude: {loc.lon}</h5>
			</div>
			{ weatherFlag ? getLogDetails() : getWeatherDetails() }
			<div className="text-left">
				{ weatherFlag ? getTodaysWeatherButton() : getAllLoggedWeatherEventsButton() }
				<button className="btn btn-lg btn-primary" onClick={back} >Back</button>
			</div>
		</div>
	)
};

export default connect()(CityView);
