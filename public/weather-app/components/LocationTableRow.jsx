import React from 'react';
import {countryCodeConverter} from "../helpers/countryCode";

export const LocationTableRow = ({selectCity, loc}) => {

	return (
		<tr onClick={() => { selectCity(loc) }}>
			<td>{loc.city}</td>
			<td>{countryCodeConverter(loc.country)}</td>
			<td>{loc.lat}</td>
			<td>{loc.lon}</td>
		</tr>
	);
};
