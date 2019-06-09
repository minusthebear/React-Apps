export const createWeatherObj = (obj) => {
	return {
		id: obj.id,
		name: obj.name,
		dt: obj.dt * 1000,
		main: obj.main,
		sunrise: obj.sys && obj.sys.sunrise ? obj.sys.sunrise * 1000 : null,
		sunset: obj.sys && obj.sys.sunset ? obj.sys.sunset * 1000 : null,
		icon: obj.weather.length ? obj.weather[0].icon : null,
		wind: obj.wind,
		rain: obj.rain,
		snow: obj.snow,
		visibility: obj.visibility,
		timezone: obj.timezone,
		weather: obj.weather

	};
};

export const createLocationObj = (obj) => {
	return {
		id: obj.id,
		city: obj.name,
		country: obj.sys.country,
		lat: obj.coord.lat,
		lon: obj.coord.lon
	};
};
