import React from 'react';
import './Header.scss';

export default function Header({ locations, add }) {
	return (
		<div className="row header-row">
			<div className="col-md-12">
				<div className="h1">
					WEATHER DETAILS
				</div>
			</div>
			<div className="col-md-12">
				<ul className="list-inline">
					<li className="list-inline-item" onClick={locations}>SEE ALL CITIES</li>
					<li className="list-inline-item" onClick={add}>ADD A LOCATION</li>
				</ul>
			</div>
		</div>
	);
}
