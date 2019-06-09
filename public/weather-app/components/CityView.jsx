import React, { useState} from 'react';
import { createWeatherObj } from '../helpers/createObjects';
import { getCityAPI, saveCurrentWeather } from '../api/weatherApi';
import { countryCodeConverter } from '../helpers/countryCode';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';

const CityView = ({ loc, back }) => {

	let [ weather, setWeather ] = useState(null);

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
				<button className="btn btn-lg" onClick={getLocationWeather}>Get today's weather</button>
				<button className="btn btn-lg btn-primary" onClick={back} >Back</button>
			</div>
			<div>
				{ getWeatherDetails() }
			</div>
		</>
	)
};

export default connect()(CityView);
