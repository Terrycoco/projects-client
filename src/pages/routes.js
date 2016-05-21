import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from 'pages/App';
import Home from 'pages/Home';
import AppsPage from 'pages/AppList';

//mapping path to a components
export default (
	<Route path="/" component={App} >
		<IndexRoute component={Home} />
		<Route path="/apps" component={AppsPage}>

		</Route>
	</Route>
);

//menu titles
export const menuItems = [
	{title: 'Home', route: '/'},
	{title: 'Apps', route: '/apps',
			subItems: [
			  {title: 'Puzzle', route: '/apps/puzzle'}
			]
	},
	{title: 'Blog', route: '/blog'},
	{title: 'Login', route: '/login'}
];