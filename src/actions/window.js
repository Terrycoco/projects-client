export const IS_SCROLLING = 'IS_SCROLLING';

export function scroll() {
 console.log('scroll called');
	return {
		type: IS_SCROLLING,
		payload: true
	};

}

export function stopScroll() {
 console.log('stop scroll called');
	return {
		type: IS_SCROLLING,
		payload: false
	};
}