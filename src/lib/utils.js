export function mergeStyles() {
	let output = {};
	for (let i = 0; i < arguments.length; i++) {
		let obj = arguments[i];
		for (var attrname in obj) {
			output[attrname] = obj[attrname];
		}
	}
	return output;
}
