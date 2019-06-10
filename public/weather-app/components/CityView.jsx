import React, { useState} from 'react';
import { createWeatherObj } from '../helpers/createObjects';
import {getCityAPI, saveCurrentWeather, allWeatherLogsByLocation, getWeatherLog} from '../api/weatherApi';
import { countryCodeConverter } from '../helpers/countryCode';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';
import WeatherLogDetails from './WeatherLogDetails';

const CityView = ({ loc, back }) => {

	let [ weather, setWeather ] = useState(null);
	let [ weatherLogs, setWeatherLogs] = useState(null);
	let [ weatherFlag, setWeatherFlag ] = useState(false);

	const getLocationWeather = async () => {
		const wt = await getCityAPI(loc.city, loc.country);
		const retWt = createWeatherObj(wt);
		setWeather(retWt);
		await saveCurrentWeather(retWt);
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
			return <WeatherLogDetails weatherLogs={weatherLogs} onClick={getWeatherLogDetail} />;
		}
	};

	return (
		<>
			<div>
				<h3>{ loc.city }{ loc.country ? ', ' : null}{countryCodeConverter(loc.country)}</h3>
			</div>
			<div>
				<div>Latitude: {loc.lat}</div>
				<div>Longitude: {loc.lon}</div>
			</div>
			<div>
				<button className="btn btn-lg btn-info" onClick={getLocationWeather}>Get today's weather</button>
				<button className="btn btn-lg btn-warning" onClick={displayAllLoggedWeather}>Get all logged weather events</button>
				<button className="btn btn-lg btn-primary" onClick={back} >Back</button>
			</div>
			<div>
				{ weatherFlag ? getLogDetails() : getWeatherDetails() }
			</div>
		</>
	)
};

export default connect()(CityView);
