export const SHOW_LOCK = 'SHOW_LOCK';
export const LOCK_SUCCESS = 'LOCK_SUCCESS';
export const LOCK_ERROR = 'LOCK_ERROR';

function showLock() {
	return {
		type: SHOW_LOCK
	}
}

function lockSuccess(profile, token) {
	return {
		type: LOCK_SUCCESS,
		profile,
		token
	}
}

function lockError(err) {
	return {
		type: LOCK_ERROR,
		err
	}
}

export function login() {
	//create new Auth0lock object
	const lock = new Auth0Lock('iKi3FSwIfwPc7C9t7dNEcwiC1a3Qyzfh', 'tmarr.auth0.com');
	return dispatch => {
		if(err) {
			dispatch(lockError(err));  //dispatch lockError action
			return;
		}
		localStorage.setItem('profile', JSON.stringify(profile));
		localStorage.setItem('id_token', token);
		dispatch(lockSuccess(profile, token));  //dispatch lockSuccess action
	}
}