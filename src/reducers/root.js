import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
// import authReducer from 'reducers/authReducer';


const rootReducer = combineReducers({
	 browser: createResponsiveStateReducer({
        extraSmall: 500,
        small: 700,
        medium: 1024,
        large: 1280,
        extraLarge: 1400,
    }),
});

export default rootReducer;
