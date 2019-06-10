import React, { useState } from 'react';
import { connect } from 'react-redux'
import {LocationTableRow} from "./LocationTableRow";

const Locations = ({ allLocations, selectCity, deleteCity }) => {

	const showAllLocations = () => {
		if (allLocations.length) {
			return (
				<table>
					<thead>
					<tr>
						<th>City</th>
						<th>Country</th>
						<th>Latitude</th>
						<th>Longitude</th>
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

	return (
		<div>
			{ allLocations ? showAllLocations() : null }
		</div>
	)
};

export default connect()(Locations);
