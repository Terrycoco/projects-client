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

// function that will do a "magic" XSS-ish trick
export function multipleValues(style) {
  var result = {};
  // feel free to replace for..in+hasOwnProperty with for..of
  for (var key in style) { 
    if (style.hasOwnProperty(key)) {
      var value = style[key];
      if (Array.isArray(value)) {
        // by adding semicolon at the begging we applying
        // a trick that ofthen used in XSS attacks
        result[key] = ';' + key + ':' + value.join(';' + key + ':');
      } else if (typeof value === "object" && value !== null) {
        // here we doing recursion
        result[key] = multipleValues(value);
      } else {
        // and here we simply copying everything else
        result[key] = value;
      }
    }
  }
  return result;
}