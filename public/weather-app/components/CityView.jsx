import React, { useState} from 'react';
import { getCityAPI } from '../api/weatherApi';
import { countryCodeConverter } from '../helpers/countryCode';
import { connect } from 'react-redux';
import WeatherDetails from './WeatherDetails';

const CityView = ({ loc, back }) => {

	let [ weather, setWeather ] = useState(null);

	const getLocationWeather = async () => {
		const wt = await getCityAPI(loc.city, loc.country);
		console.log(wt);
		wt.dt = wt.dt * 1000;
		wt.sys.sunrise = wt.sys && wt.sys.sunrise ? wt.sys.sunrise * 1000 : null;
		wt.sys.sunset = wt.sys && wt.sys.sunset ? wt.sys.sunset * 1000 : null;
		wt.icon = wt.weather.length ? wt.weather[0].icon : null;
		setWeather(wt);
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
