import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './index.css';
// import App from './weather-app/components/App';
import App from './react-jeopardy';
// import App from './weather-app/src/FakeApp.jsx';

const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
    document.getElementById('root')
);

// This is a comment for a test commit

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

