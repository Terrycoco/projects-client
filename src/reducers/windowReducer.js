import {IS_SCROLLING} from 'actions/window';

const INITIAL_STATE = {
   isScrolling: false
};


export default (state=INITIAL_STATE, action) => {
	switch(action.type) {
		case IS_SCROLLING: {
			return Object.assign({}, state, { isScrolling: action.payload } );
		}
		default:
			return state;
	}
};