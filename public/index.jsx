import React from 'react';
import { render } from 'react-dom';
import App from './home-page/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import SessionWrapper from './home-page/SessionWrapper';

render(
	<Provider store={store()}>
		<SessionWrapper />
	</Provider>,
    document.getElementById('root')
);

// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

