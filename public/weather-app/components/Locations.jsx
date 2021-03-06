import React, { useState } from 'react';
import { connect } from 'react-redux'
import {LocationTableRow} from "./LocationTableRow";
import './Locations.scss';

const Locations = ({ allLocations, selectCity, deleteCity }) => {

	const showAllLocations = () => {
		if (allLocations.length) {
			return (
				<table className="locations-table">
					<thead>
						<tr>
							<th>City</th>
							<th>Country</th>
							<th>Latitude</th>
							<th>Longitude</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
					{
						allLocations.map((val) =>
							<LocationTableRow
								key={val._id}
								loc={val}
								selectCity={selectCity}
								deleteCity={deleteCity}
							/>
						)
					}
					</tbody>
				</table>
			);
		}
		return null;
	};

	const noSavedLocations = () => {
		return (
			<>
				<h3>You've yet to add a location.</h3>
			</>
		)
	};

	return (
		<div className="locations-table-container">
			{ allLocations && allLocations.length ? showAllLocations() : noSavedLocations() }
		</div>
	)
};

export default connect()(Locations);
