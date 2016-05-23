require("babel-polyfill");
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from 'pages/routes';
import reducers from './reducers/root';
import thunkMiddleware from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

import App from 'pages/App';
// to compile styles
// import Styles from '../css/app.scss';



const store = createStore(
	reducers,
	compose(
		responsiveStoreEnhancer,
		applyMiddleware(thunkMiddleware)
		)
);

//create enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.routing
});

// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// })


ReactDOM.render(
	<Provider store={ store }>
		<Router history={history} routes={routes} />
	</Provider>
  , document.getElementById('app')
);

