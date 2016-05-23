import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { routerReducer } from 'react-router-redux';
import windowReducer from 'reducers/windowReducer';
// import authReducer from 'reducers/authReducer';


const rootReducer = combineReducers({
	 routing: routerReducer,
	 browser: createResponsiveStateReducer({
        extraSmall: 500,
        small: 700,
        medium: 1024,
        large: 1280,
        extraLarge: 1400,
    }),
	 windowEvents: windowReducer
});

export default rootReducer;
