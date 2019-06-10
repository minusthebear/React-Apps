import React from 'react';
import {countryCodeConverter} from "../helpers/countryCode";
import trash from '../images/icons8-waste-64.png';

export const LocationTableRow = ({selectCity, loc, deleteCity}) => {

	const onClick = () => {
		deleteCity(loc.id);
	};

	const select = () => {
		selectCity(loc);
	}

	return (
		<tr>
			<td onClick={select}>{loc.city}</td>
			<td onClick={select}>{countryCodeConverter(loc.country)}</td>
			<td onClick={select}>{loc.lat}</td>
			<td onClick={select}>{loc.lon}</td>
			<td><img src={trash} alt="Trash it!" onClick={onClick} /> </td>
		</tr>
	);
};
